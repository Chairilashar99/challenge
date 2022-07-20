console.log('>>> JS TODO <<<')
console.log('$ node Challenge13.js <command>')
console.log('$ node Challenge13.js list')
console.log('$ node Challenge13.js task <task_id>')
console.log('$ node Challenge13.js add <task_content>')
console.log('$ node Challenge13.js delete <task_id>')
console.log('$ node Challenge13.js complete <task_id>')
console.log('$ node Challenge13.js uncomplete <task_id>')
console.log('$ node Challenge13.js list:outstanding asc|desc')
// console.log('$ node Challenge13.js list:completed asc|desc')
// console.log('$ node Challenge13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>')
// console.log('$ node Challenge13.js filter:<tag_name>')

const process = require('process');
var args = process.argv;
const fs = require('fs')
const readline = require('readline')
const data = JSON.parse(fs.readFileSync('todo.json', 'utf-8'))


if (args[2] == 'list') {
    console.log('Daftar pekerjaan')
    for (let i = 0; i < data.length; i++) {
        console.log(`${i + 1} [${data[i].selesai ? "X" : " "}] ${data[i].pekerjaan}`)

    }
}

if (args[2] == 'task') {
    console.log('Daftar pekerjaan')
    for (let i = 0; i < data.length; i++) {
        console.log(`${i + 1} [${data[i].selesai ? "X" : " "}] ${data[i].pekerjaan}`)
    }
}
if (args[2] == 'add') {
    let newArr = {
        "pekerjaan": args.slice(3).join(' '),
        "selesai": false,
        "tag_name": []
    }
    data.push(newArr)
    fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf-8')
    console.log(`"${args.slice(3).join(' ')}" telah ditambahkan.`)
}
if (args[2] == 'delete') {
    for (let i = 0; i < data.length; i++) {
        console.log(`"${data[i].pekerjaan}" telah di hapus dari daftar`)
        data.splice(i, 1)
        fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf-8')
    }
}
if (args[2] == 'complete') {
    for (let i = 0; i < data.length; i++) {
        data[i].selesai = true
        console.log(`"${data[i].pekerjaan}" telah selesai.`)
        fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf-8')
    }
}
if (args[2] == 'uncomplete') {
    for (let i = 0; i < data.length; i++){
    data[i].selesai = false
    console.log(`"${data[i].pekerjaan}"status selesai dibatalkan.`)
    fs.writeFileSync('todo.json',JSON.stringify(data,null, 3),'utf-8')
    }
}
