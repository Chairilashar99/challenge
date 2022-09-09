const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini >'

});
rl.prompt() ;

rl.on('line', (line) => {
let arr = line.split(" ");
    let newArr = [];
    arr.forEach(item => {
        let newString = '';
        if (item[0] == 'a' || item[0] == 'i' || item[0] == 'u' || item[0] == 'e' || item[0] == 'o') {
            newString = item
        } else {
            newString = item.slice(1, item.length) + item[0] + 'nyo'
        }
        newArr.push(newString);

    })
    let array =newArr.join(" ")
    console.log(array)
    rl.prompt() ;
})
.on('close', () => {
console.log('Good bye!');
process.exit(0);
})


