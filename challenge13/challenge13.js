console.log('>>> JS TODO <<<')
console.log('$ node Challenge13.js <command>')
console.log('$ node Challenge13.js list')
console.log('$ node Challenge13.js task <task_id>')
console.log('$ node Challenge13.js add <task_content>')
console.log('$ node Challenge13.js delete <task_id>')
console.log('$ node Challenge13.js complete <task_id>')
console.log('$ node Challenge13.js uncomplete <task_id>')
console.log('$ node Challenge13.js list:outstanding asc|desc')
console.log('$ node Challenge13.js list:completed asc|desc')
console.log('$ node Challenge13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>')
console.log('$ node Challenge13.js filter:<tag_name>')

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
    for (let i = 0; i < data.length; i++) {
        data[i].selesai = false
        console.log(`"${data[i].pekerjaan}"status selesai dibatalkan.`)
        fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf-8')
    }
}
if (args[2] == 'list:outstanding' && args[3] == 'asc') {
    console.log('Daftar Pekerjaan')

    for (let i = 0; i < data.length; i++) {
        if (data[i].selesai == false) {
            console.log(`${i + 1} [${data[i].selesai ? "X" : " "}] ${data[i].pekerjaan}`)

        }
    }

}

if (args[2] == 'list:completed' && args[3] == 'asc') {
    console.log('Daftar Pekerjaan')

    for (let i = 0; i < data.length; i++) {
        if (data[i].selesai == true) {
            console.log(`${i + 1} [${data[i].selesai ? "X" : " "}] ${data[i].pekerjaan}`)

        }
    }

}

if (args[2] == 'list:outstanding' && args[3] == 'desc') {
    console.log('Daftar Pekerjaan')

    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].selesai == false) {
            console.log(`${i + 1} [${data[i].selesai ? "X" : " "}] ${data[i].pekerjaan}`)

        }
    }

}

if (args[2] == 'list:completed' && args[3] == 'desc') {
    console.log('Daftar Pekerjaan')

    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].selesai == true) {
            console.log(`${i + 1} [${data[i].selesai ? "X" : " "}] ${data[i].pekerjaan}`)

        }
    }

}
if (args[2] == 'tag') {
    let x = args[3] -1
    let a = args.slice(4)

    for (let i = 0; i < a.length; i++) {
        data[x].tag_name.push(a[i])
    }
    fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf-8')
    console.log(`Tag ${a} telah ditambahkan ke daftar ${data[x].pekerjaan}`)
}
if (args[2] == 'filter:') {
    console.log('Daftar Pekerjaan')
    for (let i = 0; i < data.length; i++) {
        if (data[i].tag_name.includes(args[3])) {
            console.log(`${i + 1} [${data[i].selesai ? "X" : " "}] ${data[i].pekerjaan}`)
        }
    }
}




