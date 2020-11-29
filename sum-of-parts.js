function partsSums(ls) {
    let sum = ls.reduce((sum, n) => sum + n, 0)
    let x  = [sum]
    for (let i = 1; i <= ls.length; i++){
        sum -= ls[i-1]
        x.push(sum )
    }
    return x
}