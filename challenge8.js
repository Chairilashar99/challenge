function pola(str) {
    var number = str.split(' ');
    var result = "";
    for (let i = 0; i < 10; i++) {
      var number1 = number[0].replace("#",i);
      for (let j = 0; j < 10; j++){
        var total = number[4].replace("#",j);
        if(number1 * number[2]== total){
        result += "" + i + " , " + j;
        }
      }
    }
  return result;
}
      
      
  console.log (pola("42#3 * 188 = 80#204"));
  //result:[8, 5]
  console.log (pola("8#61 * 895 = 78410#5"));
  //result:[7, 9]
