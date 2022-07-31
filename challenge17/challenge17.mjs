export const Pi = 22/7

export default class MesinHitung {
    constructor() {
        this.x = 1

    }

    tambah(value) {
        this.x += value;
        return this;
    }
    kurang(value) {
        this.x -= value;
        return this;
    }
    bagi(value) {
        this.x /= value;
        return this;
    }
    kali(value) {
        this.x *= value;
        return this;
    }
    pangkat(value) {
        this.x = Math.pow(this.x,value)
        return this;
    }
    akarPangkat() {
        this.x = Math.sqrt(this.x)
        return this;
    }
    pangkatDua() {
        this.x = Math.pow(this.x,2)
        return this;
    }

    result() {
        console.log(this.x)
    }
}