function addArrays(array1, array2) {
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    let sum = (arrayToNumber1 + arrayToNumber2).toString().split('')
    if ((arrayToNumber1 + arrayToNumber2) < 0){
       let a = sum.shift()
      sum[0] = `${-(sum[0])}`
    } 
    let result = []
    for(let i = 0; i < sum.length; i++){
        result.push(+sum[i])
    }
    if(array1.length === 0){
      result = array2
    } else if(array2.length === 0){
      result = array1
    } 
    return result
}