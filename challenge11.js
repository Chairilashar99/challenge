console.log('Selamat datang di permainan kata, silahkan isi dengan jawaban yang benar yah!')
const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan:'

});
const data = fs.readFileSync('data.json', 'utf-8');
var question = JSON.parse(data)
var next = 0
console.log(question[next].definition)
rl.prompt();

rl.on('line', (answer) => {
  if (answer == question[next].term) {
      console.log('Selamat anda Benar!')
      next++
      if (next < question.length) {
          console.log(question[next].definition)
          rl.prompt();
      } if (next == question.length) {
          console.log('Hore anda menang')
          rl.close()
      }
  }
  else if (answer != question[next].term) {
      console.log('Wkwkwkw,Anda kurang beruntung')
      console.log(question[next].definition)
      rl.prompt()
  }

   
})
  


