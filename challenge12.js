const process = require('process')
var args = process.argv;
console.log(process.argv)
if (!args[2]) {
    console.log('Tolong sertakan nama file sebagai inputan soalnya')
    console.log('Misalkan "node solution.js data.json"')
    process.exit(1);
}
console.log(`Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini ${args[2]}.`)
console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.')
console.log('Gunakan "skip" untuk menangguhkan pertanyaannya dan di akhir pertanyaan  akan ditanyakan lagi.')

const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban:'

});
const data = fs.readFileSync('data.json', 'utf-8');
var question = JSON.parse(data)
var next = 0
var x = 0

console.log(question[next].definition)
rl.prompt();

rl.on('line', (answer) => {
    if (answer == 'skip') {
        x -= x
        question.push(question[next])
        question.splice(next, 1)


    } else if (answer == question[next].term) {
        console.log('Anda Beruntung!')
        next++
    } else if (answer != question[next].term) {
        x++
        console.log(`Anda Kurang Beruntung! anda telah salah ${x} kali, silahkan coba lagi. `)

    }
    if (next < question.length) {
        console.log(question[next].definition)
        rl.prompt();
    } else if (next == question.length) {
        console.log('Anda Berhasil')
        rl.close()

    }

})



