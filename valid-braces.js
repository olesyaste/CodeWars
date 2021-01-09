function validBraces(braces){
    let ar = braces.split('');
    let open = ['(', '{', '['];
    let close = [')', '}', ']'];
    let t = [];
    for (let i = 0; i < braces.length; i++) {
      if (open.indexOf(braces[i]) != -1){
        t.push(braces[i]);
      } else if (close.indexOf(braces[i]) == open.indexOf(t[t.length - 1])) {
        t.pop();
      } else {
        return false;
      }
    }
    if (t.length == 0) return true;
    return false;
  }
  
  validBraces( "()" )//, true);
  validBraces( "[(])" )//, false);
  validBraces("[({})](]")// False
  validBraces("(){}[]")// true