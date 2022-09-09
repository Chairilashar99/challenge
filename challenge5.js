function stringManipulation(word){
    if (word[0] == 'a' || word[0] == 'i' || word[0] == 'u' || word[0] == 'e' || word[0] == 'o') {
        return word
        }else{
            let param = word.slice(1, word.length) + word[0] + 'nyo'
            return param
    } 
}
console.log(stringManipulation('ayam'))
console.log(stringManipulation('bebek'))

stringManipulation('ayam'); // "ayam"
stringManipulation('bebek'); // "ebekbnyo"

