function findMissingLetter(array){
    let str = "abcdefghijklmnopqrstuvwxyz";
    let a = str.split("");
    let low = array.join('').toLowerCase().split("")
    let sliced = a.slice(a.indexOf(low[0]), a.indexOf(low[low.length-1])+1)
    let result = [];
    for (let i = 0; i < sliced.length; i++){
     if (array.join('').toLowerCase().split("").indexOf(sliced[i]) === -1) {
        result.push(sliced[i]);
      }
    }
    if (array[0] === array[0].toUpperCase()) return result.toString().toUpperCase();
     return result.toString();
}