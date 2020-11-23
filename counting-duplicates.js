function duplicateCount(text){
    let s = text.toLowerCase();
    let x = [...new Set(s.split(''))]
    let arr = []
    let count = [];
    for(let i = 0; i < s.length; i++){
    count.push(s.split(x[i]).length-1);
    if (count[i] > 1) {
      arr.push(count[i])
    }
  }
    return arr.length
  }
    
  duplicateCount("aabbcde")
  //2);
  duplicateCount("aabBcde")
  //2,"should ignore case");
  duplicateCount("Indivisibility")
  //1)
  duplicateCount("Indivisibilities")
  //2, "characters may not be adjacent")