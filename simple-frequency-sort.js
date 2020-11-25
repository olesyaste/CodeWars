function solve(arr){
    let obj = {}
    arr.forEach(el => {
      if(obj[el]) {
        return obj[el]++
      }else{
        return obj[el] = 1
      }
    })
   return arr.sort((a, b) => {
      return obj[b] - obj[a] || a-b
   })
}