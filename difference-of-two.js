function twosDifference(input){
    let s = input.sort((a, b) => {
      return a-b
    })
   let ar = [];
    for(let i = 0; i < s.length; i++){
      if(s.includes(s[i]+2)){
        ar.push([s[i], s[i]+2])
      }
    }
    return ar
}
  
  twosDifference([1, 23, 3, 4, 7])
  //[[1,3],[2,4]]);
  twosDifference([1,3,4,6])
  //[[1,3],[4,6]]);
  