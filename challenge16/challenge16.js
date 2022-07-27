class car{
    constructor(tire,seats,doors,model,year){
        this.tire = tire;
        this.seats = seats;
        this.doors = doors;
        this.model = model;
        this.year = year;
        this.engine = CarFactory.generateUUID()
    }

    class Rush extends Car {
        constructor(year) {
            super(new Tyre(17, 'Bridgestone'), 8, 4, 'Rush', year)
            this.garansi = 6
        }
    }
    
    class Brio extends Car {
        constructor(year) {
            super(new Tyre(15, 'GT Radial'), 4, 4, 'Brio', year)
            this.garansi = 4
        }
    }

}

class Tyre{
    constructor(size,btire){
        this.sizetire = size;
        this.brandtire = btire;
    }

}

class CarFactory{
    constructor(companys1,companys2){
        this.cars = []

        this.company1 = companys1;
        this.company2 = companys2;

    }
    static generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxx-xxxx-4xxx-yxxx-xxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if (d > 0) {//Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }



}