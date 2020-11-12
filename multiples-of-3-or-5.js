function solution(number){
    let ar = []
    for(let i = 1; i < number; i++){
      if (i % 3 === 0 || i % 5 === 0){
        ar.push(i)
      }
    }
    return ar.reduce((acc, val) => { return acc+val }, 0)
}