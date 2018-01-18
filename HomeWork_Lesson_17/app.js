//let pizza1: Pizza = new Pizza();
//let pizza2: Pizza = new Pizza();
//pizza1.printPizza();
//pizza2.printPizza();
var PizzaArr = new Array(5);
var PizzaNumber = 0;
for (var i = 0; i < PizzaArr.length; i++) {
    PizzaArr[i] = new Pizza();
    document.write("--------------------- Pizza number " + i + " : ---------------------------<br/>");
    PizzaArr[i].printPizza();
    ++PizzaNumber;
}
document.write("Sum of all " + PizzaNumber + " Pizza's topping is : " + Pizza.sumOfTopics());
//# sourceMappingURL=app.js.map