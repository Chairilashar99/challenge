function deretKaskus(n) {
    let newArr = [];
    for (let i = 3; i <= n * 3;) {
        if (i % 5 == 0 && i % 6 == 0) {
            newArr.push('KASKUS')
        } else if (i % 5 === 0) {
            newArr.push('KAS')
        } else if (i % 6 === 0) {
            newArr.push('KUS')
        } else {
            newArr.push(i)
        }
        i += 3
    }
    return newArr
}
console.log(deretKaskus(10))
