let username = prompt("Hi there!👋\n Are you logging in as 'user' or 'admin'?")
let password = prompt("Enter your password:");
let role = "";
let securityLevel = "";
if ((username == "admin" || username == "user") && password == "1234") {
    alert(`Welcome,${username}! 🎉\n You are successfully logged in.`)
    role = username;
    securityLevel = username === "admin" ? "high" : "low";
}
else {
    alert("Invalid credentials.Access denied.");
    throw new Error("Access Denied");
}
let customerName = prompt("What is your name?");
let age = prompt("What is your age?");
let chooseCoffe = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
let quantity = prompt("How many cups do you want?");
let prices = 0;
switch (chooseCoffe) {
    case "espresso":
        prices = 50;
        break;
    case "latte":
        prices = 60;
        break;
    case "cappuccino":
        prices = 40;
        break;
    default:
        alert("Invalid coffee type.");
        throw new Error("Invalid coffee type.")
}
let totalPrice = prices * quantity;
let discount = 0;
if (age < 18 || age > 60) {
    discount = totalPrice * 0.1;
}

let finalPrice = totalPrice - discount;
let people = prompt("How many people are splitting the bill?(1,2,or3)");
let tip = prompt("Tip percentage?(0 , 5, 10, or 15)");
let tipAmount = finalPrice * (tip / 100);
let totalWithTip = finalPrice + tipAmount;
let amountPerPerson = totalWithTip / people;
alert(
    `Hello ${customerName}!👋\n` +
    `You ordered ${quantity} ${chooseCoffe}(s).\n` +
    `Original total:$${totalPrice.toFixed(2)}\n` +
    `Discount: $${discount.toFixed(2)}\n` +
    `Tip:$${tipAmount.toFixed(2)}\n` +
    `Total with tip:$${totalWithTip.toFixed(2)}\n` +
    `Split between ${people}Person(s):$${amountPerPerson.toFixed(2)}each \n` +
    `Thanks for your order!☕`
);