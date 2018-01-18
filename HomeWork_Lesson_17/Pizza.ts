class Pizza {

    private _diameter: number;
    private _slices: number;
    private _toppings: number;

    private static sumOfToppings: number=0;

    constructor(diameter?: number, slices?: number, toppings?: number) {
        if (diameter != undefined) {
            this.diameter = diameter;
        }
        else this.diameter = this.random(10, 50);

        if (slices != undefined) {
            this.slices = slices;
        }
        else this.slices = this.random(1, 8);

        if (toppings != undefined) {
            this.toppings = toppings;
        }
        else this.toppings = this.random(0, 5);

        Pizza.sumOfToppings += this.toppings;
        
    }

    get diameter(): number {
        return this._diameter;
    }
    set diameter(x: number) {
        this._diameter = x;
    }

    get slices(): number {
        return this._slices;
    }
    set slices(x: number) {
        this._slices = x;
    }

    get toppings(): number {
        return this._toppings;
    }
    set toppings(x: number) {
        this._toppings = x;

    }

    
    //////////// Methods/////////////

    public static sumOfTopics(): number {
        return Pizza.sumOfToppings;
    }

    public random(min: number, max: number): number {
        let r: number = (Math.random() * (max - min)) + min;
        return Math.floor(r);
    }
            
    public isBasicPizza(): boolean {
        if (this.toppings == 0) return true;
        return false;
    }

    public printPizza(): void {
        document.write(`Pizza Info:<br/>This Pizza is Basic? : ${this.isBasicPizza()}<br/>Diameter is : ${this.diameter}<br/>Num of Slices is : ${this.slices}<br/>Num of toppings is : ${this.toppings}<br/><br/>`);
    }
}