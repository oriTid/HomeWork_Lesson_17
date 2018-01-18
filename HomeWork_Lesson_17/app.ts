//let pizza1: Pizza = new Pizza();
//let pizza2: Pizza = new Pizza();
//pizza1.printPizza();
//pizza2.printPizza();

let PizzaArr: Array<Pizza> = new Array<Pizza>(6);

for (let i: number = 0; i < PizzaArr.length; i++) {
    PizzaArr[i] = new Pizza();
    PizzaArr[i].printPizza();

}

document.write(`Sum of all Pizza's topping is : ${Pizza.sumOfTopics()}`);


