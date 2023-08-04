const READLINE = require("readline-sync");

let orderOne;
let orderTwo;
let orderThree;

const userOrder = (person) => {
let orderName = READLINE.question(`What is your name? `);
let totalCost = 0;

let meal = READLINE.question(`${orderName}: What meal did you order? `)
let drink = READLINE.question(`${orderName}: What drink did you order? `);
let mealPrice = READLINE.question(`${orderName}: What is the price of your meal? `);
let drinkPrice = READLINE.question(`${orderName}: What is the price of your drink? `);
let orderCost = +mealPrice + +drinkPrice;
totalCost += orderCost;
orderOne = `Order Name: ${orderName}\nOrder Cost: ${orderCost}`

orderName = READLINE.question(`What is your name? `);
meal = READLINE.question(`${orderName}: What meal did you order? `)
drink = READLINE.question(`${orderName}: What drink did you order? `);
mealPrice = READLINE.question(`${orderName}: What is the price of your meal? `);
drinkPrice = READLINE.question(`${orderName}: What is the price of your drink? `);
orderCost = +mealPrice + +drinkPrice;
totalCost += orderCost;
orderTwo = `Order Name: ${orderName}\nOrder Cost: ${orderCost}`

orderName = READLINE.question(`What is your name? `);
meal = READLINE.question(`${orderName}: What meal did you order? `)
drink = READLINE.question(`${orderName}: What drink did you order? `);
mealPrice = READLINE.question(`${orderName}: What is the price of your meal? `);
drinkPrice = READLINE.question(`${orderName}: What is the price of your drink? `);
orderCost = +mealPrice + +drinkPrice;
totalCost += orderCost;
orderThree = `Order Name: ${orderName}\nOrder Cost: ${orderCost}`

return totalCost;

}

let totalCost = userOrder();
console.log(`Combined cost: ${totalCost}`);

let tip = 0
let wantToTip = READLINE.question(`Want to tip? `);

if (wantToTip == "Yes" || wantToTip == "yes" || wantToTip == "Y" || wantToTip == "y") {
tip = READLINE.question(`Enter a tip: `);
}

let total = (totalCost + (0.06 * totalCost)) + +tip;
console.log(`Your total cost: ${total}`);

let wantAReceipt = READLINE.question(`Want a receipt? `);

const receipt = () => {
if (wantAReceipt == "Yes" || wantAReceipt == "yes" || wantAReceipt == "Y" || wantAReceipt == "y") {
console.log(`${orderOne}`);
console.log(`${orderTwo}`);
console.log(`${orderThree}`);
}
}

receipt();