function order(words){
    if(words.length == 0) return words;
    let ar = words.split(' ');
      ar.sort((a,b) =>{
        let numA, numB;
        for(let i  = 0; i < a.length; i++){
          if(+a[i] >= 1) numA = +a[i];
        }
        for(let j = 0; j < b.length; j++){
          if(+b[j] >=1) numB = +b[j];
        }
          return numA - numB;
        })
      return ar.join(' ');
  }
  
  order("is2 Thi1s T4est 3a") // "Thi1s is2 3a T4est")
  order("4of Fo1r pe6ople g3ood th5e the2") //"Fo1r the2 g3ood 4of th5e pe6ople")
  order("") // "")