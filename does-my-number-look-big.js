function narcissistic(value) {
    let ar = value.toString().split('')
    let s = []
    for(let i = 0; i < ar.length; i++){
      s.push((ar[i]**ar.length))
    }
    let sum = s.reduce((a,b) => {
      return a + b
    })
    if(sum === value) return true
     else return false
}