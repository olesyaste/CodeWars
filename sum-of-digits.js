function digital_root(n) {
    let sumOfDigits;
    while (n.toString().split('').length > 1){
     let x = n.toString().split('');
     sumOfDigits = x.reduce((acc, val) => {
       return acc + Number(val)
     },0)
     n = sumOfDigits
    }
    if (sumOfDigits === undefined) return 0
    return sumOfDigits
}