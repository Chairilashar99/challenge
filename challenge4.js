function indexPrime(param1) {

    function checkPrima(n) {

        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return n > 1

    }
    let nextPrime = 0
    for (let i = 2; i < Math.pow(10,309); i++) {
        if (checkPrima(i)) {
            nextPrime++
        }
        if (param1 == nextPrime) {
            return i
        }

    }
}


console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881