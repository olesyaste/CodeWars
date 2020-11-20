function testIt(a,b){
    let arr1 = a.toString().split('');
    let arr2 = b.toString().split('');
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < arr1.length; i++){
      sum1 += Number(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
      sum2 += Number(arr2[i])
    }
    return sum1*sum2
}
  
  testIt(0,1)
  //0)
  testIt(1,2)
  //2)
  testIt(5,6)
  //30)
  testIt(10,10)
  //1)
  testIt(200,200)
  //4)
  testIt(12,34)
  //21)
  testIt(123,45)
  //54)