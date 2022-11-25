function indexPrime(param){
    if(param[0] == 'a' || param[0] =='i' || param[0] =='u' || param[0] =='e' || param[0] =='o'){
        return param
    }else {
        let word = param.slice(1, param.length)+param[0]+'nyo'
        return word
    }
}

console.log(indexPrime('bebek'))
console.log(indexPrime('ayam'))