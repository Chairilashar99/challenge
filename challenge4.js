function checkPrime (param1) {
    let adalahPrime = true;
    for (let i = 2; i < param1; i++) {
        if (param1 % i == 0) {
            adalahPrime = false
            break;
        } 
        
    } return adalahPrime
} 
function indexPrime (param1) {
    var index = [];
    for (let i = 2; i < Infinity; i++) {
    if (checkPrime(i)) {
            index.push(i)
            
        }
        if (param1 <= index.length) {
            return index[index.length -1];
        }     
    } 
} 
console.log(indexPrime(4)); // result => 7
console.log(indexPrime(500)); // result => 3571
console.log(indexPrime(37786)) // result => 450881