
function findUniq(arr) {
    let str = arr.toString();
    let f = arr.filter((num) => {
      if(str.split(`${num}`).length-1 === 1){
        return num
      };
    });
    return Number(f);
  }
  
  function findUniq(arr) {
    let sorted = arr.sort();
    if (sorted[0] === sorted[1]) {
      return sorted[sorted.length-1]
    }  else {
      return sorted[0]
    }
  }
  
  
  
  findUniq([ 0, 1, 0 ])// 1);
  findUniq([ 1, 1, 1, 2, 1, 1 ])// 2);
  findUniq([ 3, 10, 3, 3, 3 ])// 10);