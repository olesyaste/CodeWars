function pyramid(n) {
    let ar = [];
     for(let i = 0; i < n; i++){
       ar.push([...Array(i+1)].fill(1))
     }
     return ar;
}