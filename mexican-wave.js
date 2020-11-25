function wave(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
      if(str[i] !== ' '){
        arr.push(str.substring(i, 0) + str[i].toUpperCase() + str.substring(i+1));
      } 
    }
    return arr
}