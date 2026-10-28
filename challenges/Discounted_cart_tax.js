function getDiscountedTotal(subtotal, quantity) {
    if (!Number.isFinite(quantity) || !Number.isInteger(quantity) || quantity < 0){
        throw new Error("Quantity must be a valid non-negative number.");
    }
    else if(quantity > 5){
        return subtotal * 0.95;
    }
    else {
        return subtotal;
    }
}

function calculateTax(subtotal) {
    if (!Number.isFinite(subtotal) || subtotal < 0){
        throw new Error("Quantity must be a valid non-negative number.");
    }
    return subtotal * 0.1;
}

function calculateLineTotal(price, quantity) {
    if (!Number.isFinite(quantity) || !Number.isInteger(quantity) || quantity < 0 || !Number.isFinite(price) || price < 0){
        throw new Error("Quantity and price must be a valid non-negative number.");
    }
    return price * quantity;
}

function calculateTotal(price, quantity) {
    if (!Number.isFinite(quantity) || !Number.isInteger(quantity) || quantity < 0 || !Number.isFinite(price) || price < 0){
        throw new Error("Quantity and price must be a valid non-negative number.");
    }
    return calculateTax(getDiscountedTotal(calculateLineTotal(price, quantity), quantity)) + getDiscountedTotal(calculateLineTotal(price, quantity), quantity);
}

const discount = getDiscountedTotal(calculateLineTotal(30, 6), 6);
const tax = calculateTax(discount);
const total = calculateTotal(30, 6);

console.log(`Subtotal-before-tax: $${discount.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);

const tax2 = calculateTax(calculateLineTotal(30, 6));

console.log(`Tax-before-discount: $${tax2.toFixed(2)}`);
console.log(`Tax-after-discount: $${tax.toFixed(2)}`);