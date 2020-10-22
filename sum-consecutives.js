function sumConsecutives(s) {
    let result = [], temp = 0;
    for(let i = 0; i<s.length; i++) {
      if(s[i] === s[i+1]){
        temp += s[i];
      } else if(s[i] !== s[i+1]){
        result.push(temp + s[i]);
        temp = 0
      }
    }
    return result;
  }
  
  
  sumConsecutives([1,4,4,4,0,4,3,3,1]);
  //[1,12,0,4,6,1];