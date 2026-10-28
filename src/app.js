// ======================
// BLOCK 1 - Values, Variables, Operators
// ======================

const itemName = "Notebook";
const price = 12.5;
let quantity = 3;
const subtotal = price * quantity;
const tax = subtotal * 0.08;
const total = subtotal + tax;
console.log(`${itemName}: $${(total).toFixed(2)}`);

// ======================
// BLOCK 2 - Conditions and Control Flow
// ======================

function getDiscountedTotal(total, member) {
    if (!Number.isFinite(total) || total < 0) return null;
    if (member && total >= 50) return total * 0.9;
    return total;
}

console.log(getDiscountedTotal(50, true)); //member + 50
console.log(getDiscountedTotal(80, false)); //non-member + 80
console.log(getDiscountedTotal(-80, true)); //negative

// ======================
// BLOCK 3 - Loops and Accumulation
// ======================

const prices = [5, 12, 25, 8, 30];

let price_total = 0; //initialize total
let count = 0; //initialize count

for (const price of prices) { //loop through prices
    if (!prices.length) { //check against empty array
        price_total = 0;
    } else {
        price_total += price;
    }
    
    if (price > 20) count += 1;
}

console.log(price_total);
console.log(count);

//Comparing against reduce
const sum = prices.reduce(function (acc, n) {
    return acc + n;
}, 0);

console.log(sum);

// ======================
// BLOCK 4 - Functions and Testable Logic
// ======================

function calculateLineTotal(price, quantity){
    if (!Number.isFinite(price) || !Number.isInteger(quantity) || price < 0 || quantity < 0){
        throw new Error("Price and quantity must be valid non-negative numbers.");
    }
    return price * quantity;
}

function calculateTax(price, tax){
    if (!Number.isFinite(tax) || tax < 0 || !Number.isFinite(price) || price < 0){
        throw new Error("Tax and price must be valid non-negative number.");
    }
    return price * tax;
}

function calculateTotal(subTotal, tax) {
    if (!Number.isFinite(tax) || tax < 0 || !Number.isFinite(subTotal) || subTotal < 0){
        throw new Error("Tax and subtotal must be valid non-negative number.");
    }
    return subTotal + tax;
}

function formatMoney(total){
    if (!Number.isFinite(total) || total < 0){
        throw new Error("Total must be valid non-negative number.");
    }
    return `$${total.toFixed(2)}`;
}

function printReceipt(items){
    for (const item in items) {
        const detail = items[item];
        const subTotal = calculateLineTotal(detail.price, detail.quantity);
        const tax = calculateTax(subTotal, detail.tax);
        const total = calculateTotal(subTotal, tax);

        console.log(`${item}: ${formatMoney(total)}\n`);
    }
}

const cart = {
  Notebook: { price: 12.5, quantity: 2, tax: 0.2 },
  Pen:      { price: 1.99, quantity: 5, tax: 0.2 },
  Eraser:   { price: 0.75, quantity: 0, tax: 0.0 },
  //Crayon:   { price: "abc", quantity: 2,   tax: 0.2 },
  //Charcoal: { price: 5,     quantity: 2.5, taxRate: 0.2 },
  //Board:    { price: -5,    quantity: 2,   taxRate: 0.2 },
};

printReceipt(cart);