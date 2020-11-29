function digPow(n, p){
    let x = n.toString().split('');
    let sum = 0;
    for(let i = 0; i < x.length; i++){
      sum += Number(x[i])**p
      p++
    }
    if (sum % n  === 0) return sum/n;
    return -1;
}