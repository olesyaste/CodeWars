var uniqueInOrder=function(iterable){
    let arr;
    if (typeof iterable === 'string'){
      arr = iterable.split('')
    } else {
      arr = iterable
    }
    let unique = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i+1]){
         unique.push(arr[i])
      }
    }
    return unique
}
  
  uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')     //    == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])   //    == [1,2,3]