function iqTest(numbers){
    let ar = numbers.split(' ');
    let odd = [];
    let even = [];
    for(let i = 0; i < ar.length; i++){
      if(+ar[i] % 2 === 0){
        even.push(ar[i]);
      } else {
        odd.push(ar[i]);
      }
    }
      if (odd.length < even.length){
       return ar.indexOf(odd[0]) +1;
      } 
        return ar.indexOf(even[0]) +1;
}
  
  
  iqTest("2 4 7 8 10") //3);
  iqTest("1 2 2") //1);