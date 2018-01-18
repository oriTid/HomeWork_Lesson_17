var Pizza = /** @class */ (function () {
    function Pizza(diameter, slices, toppings) {
        if (diameter != undefined) {
            this.diameter = diameter;
        }
        else
            this.diameter = this.random(10, 50);
        if (slices != undefined) {
            this.slices = slices;
        }
        else
            this.slices = this.random(1, 8);
        if (toppings != undefined) {
            this.toppings = toppings;
        }
        else
            this.toppings = this.random(0, 5);
        Pizza.sumOfToppings += this.toppings;
    }
    Object.defineProperty(Pizza.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        set: function (x) {
            this._diameter = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "slices", {
        get: function () {
            return this._slices;
        },
        set: function (x) {
            this._slices = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "toppings", {
        get: function () {
            return this._toppings;
        },
        set: function (x) {
            this._toppings = x;
        },
        enumerable: true,
        configurable: true
    });
    //////////// Methods/////////////
    Pizza.sumOfTopics = function () {
        return Pizza.sumOfToppings;
    };
    Pizza.prototype.random = function (min, max) {
        var r = (Math.random() * (max - min)) + min;
        return Math.floor(r);
    };
    Pizza.prototype.isBasicPizza = function () {
        if (this.toppings == 0)
            return true;
        return false;
    };
    Pizza.prototype.printPizza = function () {
        document.write("Pizza Info:<br/>This Pizza is Basic? : " + this.isBasicPizza() + "<br/>Diameter is : " + this.diameter + "<br/>Num of Slices is : " + this.slices + "<br/>Num of toppings is : " + this.toppings + "<br/><br/>");
    };
    Pizza.sumOfToppings = 0;
    return Pizza;
}());
//# sourceMappingURL=Pizza.js.map