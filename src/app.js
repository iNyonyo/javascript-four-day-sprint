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