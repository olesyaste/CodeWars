function towerBuilder(nFloors) {
    let ar = [];
    let space = 0;
    for(let i = nFloors; i > 0; i--){
      ar.push(" ".repeat(space) + "*".repeat(i) + "*".repeat(i-1) + " ".repeat(space))
      space++
    }
   return ar.reverse()
}