//let pizza1: Pizza = new Pizza();
//let pizza2: Pizza = new Pizza();
//pizza1.printPizza();
//pizza2.printPizza();
var numOfPiz = parseInt(prompt("Hello Im the Pizza Robot.\nHow many Pizza's would you like me to bake for you today ?"));
while (numOfPiz <= 0) {
    numOfPiz = parseInt(prompt("Are you serious !!??\n You cant ask me to bake " + numOfPiz + " Pizzas.\nPlease try again."));
}
var PizzaArr = new Array(numOfPiz);
var PizzaNumber = 0;
for (var i = 0; i < PizzaArr.length; i++) {
    PizzaArr[i] = new Pizza();
    document.write("--------------------- Pizza number " + (i + 1) + " : ---------------------------<br/>");
    PizzaArr[i].printPizza();
    ++PizzaNumber;
}
document.write("Sum of all " + PizzaNumber + " Pizza's topping is : " + Pizza.sumOfTopics());
//# sourceMappingURL=app.js.map