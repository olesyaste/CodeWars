function spinWords(s){
    let splitted = s.split(' ');
    let ar = [];
    for(let i = 0; i < splitted.length; i++){
      if(splitted[i].length >= 5){
        ar.push(splitted[i].split('').reverse().join(''))
      } else {
        ar.push(splitted[i])
      }
    }
    return ar.join(' ')
}


spinWords("Welcome")
//"emocleW");
spinWords("Hey fellow warriors")
//"Hey wollef sroirraw");
spinWords("This is a test")
//"This is a test");