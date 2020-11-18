function count (string) { 
    let arr = string.split("");
    let obj = {};
    arr.forEach(str => {
      if(obj[str]) {
        obj[str]++
      } else {
        obj[str] = 1;
      }
    });
    return obj
}