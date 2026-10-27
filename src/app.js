const itemName = "Notebook";
const price = 12.5;
let quantity = 3;
const subtotal = price * quantity;
const tax = subtotal * 0.08;
const total = subtotal + tax;
console.log(`${itemName}: $${(total).toFixed(2)}`);