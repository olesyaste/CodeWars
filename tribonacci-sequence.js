function tribonacci(signature,n){
    if(n >= 1){
    let ar = signature;
    let sum;
    for(let i = 0; i < n; i++){
      sum = ar.slice(i).reduce((a,b)=> {return a+b},0);
      ar.push(sum);
    }
      return ar.slice(0, n);
    };
    if(n === 0) return [];
}

tribonacci([12, 0, 0],2)//,[1,1,1,3,5,9,17,31,57,105])
tribonacci([0,0,1],10)//,[0,0,1,1,2,4,7,13,24,44])
tribonacci([0,1,1],10)//,[0,1,1,2,4,7,13,24,44,81])
tribonacci([1,0,0],10)//,[1,0,0,1,1,2,4,7,13,24])
tribonacci([0,0,0],10)//,[0,0,0,0,0,0,0,0,0,0])