function calculateTotal(purchases) {
    if (purchases.length === 0) {
        throw new Error("Array must not be empty"); 
    }
    else{
        return purchases.reduce((acc, purchase) => {
            return acc + purchase.price;
        }, 0);
    }
}

function calculateCount(purchases) {
    return purchases.length;
}

function calculateAverage(purchases) {
    return (calculateTotal(purchases) / purchases.length).toFixed(2);
}

function findHighestPrice(purchases) {
    return purchases.reduce((acc, purchase) => {
        if (acc > purchase.price) {
            return acc;
        } else {
            return purchase.price;
        };
    }, 0);
}

function filterMostExpensive(purchases) {
    const highestPrice = findHighestPrice(purchases);

    return purchases.filter(purchase => purchase.price === highestPrice);
}

function getPurchaseSummary(purchases) {
    return {
        total: calculateTotal(purchases),
        count: calculateCount(purchases),
        average: calculateAverage(purchases),
        mostExpensive: filterMostExpensive(purchases),
    };
}

const purchases = [
  { item: "Notebook", price: 12 },
  { item: "Pen", price: 3 },
  { item: "Bag", price: 45 }
];

console.log(getPurchaseSummary(purchases));