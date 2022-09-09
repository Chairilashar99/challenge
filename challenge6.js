function sentencesManipulation(word) {
    let arr = word.split(" ");
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
    return newArr.join(" ")
}
console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'));
sentencesManipulation('ibu pergi ke pasar bersama aku');



