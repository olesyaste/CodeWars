function findOutlier(int){
    let odd = [];
    let even = [];
    let result;
    for (let i = 0; i < int.length; i++){
      if(int[i] % 2 === 0){
        even.push(int[i])
      }else{
        odd.push(int[i])
      }
      if(even.length - odd.length > 0){
      result = odd
    } else {
      result = even
    }
    }
    return +result
}