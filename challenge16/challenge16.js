class Car {
    constructor(tire, seats, doors, model, year) {
        this.tire = tire
        this.seats = seats;
        this.doors = doors;
        this.model = model;
        this.year = year;
        this.engine = CarFactory.generateUUID()
    }

}

class Tyre {
    constructor(size, btire) {
        this.sizetire = size;
        this.brandtire = btire;
    }
}

class Rush extends Car {
    constructor(year) {
        super(new Tyre('Bridgestone'), 8, 4, 'Rush', year)
        this.garansi = 6
    }
}

class Brio extends Car {
    constructor(year) {
        super(new Tyre('GT Radial'), 4, 4, 'Brio', year)
        this.garansi = 4
    }
}

class CarFactory {
    constructor(companys, companys2) {
        this.cars = []

        this.company = companys
        this.company2 = companys2
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

    static random() {
        return Math.floor(Math.random() * 50) + 1;
    }

    produksi(year) {
        let x = 0
        for (let i = 0; i < CarFactory.random(); i++) {
            const mobil1 = new Brio(year);

            this.cars.push(mobil1)
            x++
        }

        let y = 0
        for (let j = 0; j < CarFactory.random(); j++) {
            const mobil2 = new Rush(year);

            this.cars.push(mobil2)
            y++
        }
        console.log(`tahun ${year} perusahaan ${this.company} menghasilkan sebanyak ${x} mobil\ntahun ${year} perusahaan ${this.company2} menghasilkan sebanyak ${y} mobil\n`)

    }
    garansi(year) {

        for (let i = 0; i < this.cars.length; i++) {
            let z = year

            if (z > (this.cars[i].garansi + this.cars[i].year)) {
                console.log(`mobil ${this.cars[i].model}\nmenggunakan Nomor Engine ${this.cars[i].engine} dengan waktu garansi ${this.cars[i].garansi} tahun`)
                console.log(`garansi habis di tahun ${z} dengan awal produksi tahun ${this.cars[i].year}\n `)
            } else {
                console.log(`mobil ${this.cars[i].model}\nmenggunakan Nomor Engine ${this.cars[i].engine} dengan waktu garansi ${this.cars[i].garansi} tahun`)
                console.log(`garansi masih berlaku sampai tahun ${z} dengan awal produksi tahun ${this.cars[i].year}\n`)
            }
        }
    }

}

let factory = new CarFactory('Daihatsu', 'Honda');
factory.produksi(2022);
factory.garansi(2026)
