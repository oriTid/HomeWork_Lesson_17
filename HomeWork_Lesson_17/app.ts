//let pizza1: Pizza = new Pizza();
//let pizza2: Pizza = new Pizza();
//pizza1.printPizza();
//pizza2.printPizza();

let PizzaArr: Array<Pizza> = new Array<Pizza>(5);
let PizzaNumber: number = 0;

for (let i: number = 0; i < PizzaArr.length; i++) {
    PizzaArr[i] = new Pizza();
    document.write(`--------------------- Pizza number ${i} : ---------------------------<br/>`)
    PizzaArr[i].printPizza();
    ++PizzaNumber;

}

document.write(`Sum of all ${PizzaNumber} Pizza's topping is : ${Pizza.sumOfTopics()}`);


