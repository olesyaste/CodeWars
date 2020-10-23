function longestRepetition(s) {
    let longest = 0;
    let longestChar = '';
    let char = '';
    let repetition = 1;
    for (let i = 0; i < s.length; i++){
      char = s[i];
      if (s[i+1] === char){
        repetition++
      } else {
        if (repetition > longest) {
          longest = repetition;
          longestChar = char;
        }
        repetition = 1;
      }
    }
    return [longestChar, longest]
  }