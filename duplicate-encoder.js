function duplicateEncode(word){
    let ar = [];
    let sp = word.toLowerCase().split('');
    for(let i = 0; i < sp.length; i++){
      if(sp.join('').split(sp[i]).length > 2){
        ar.push(')');
      } else {
          ar.push('(');
      }
    }
    return ar.join('')
}
  
  duplicateEncode("din");
  duplicateEncode("recede");
  duplicateEncode("Success");
  duplicateEncode("(( @");
  