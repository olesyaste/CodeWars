function willFit(present, box){
    present.sort((a,b) => {
     return b-a
    })
    box.sort((a,b) => {
     return b-a
    })
    if(box[0]-2 - present[0] >= 0 && box[1]-2 - present[1] >= 0 && box[2]-2 - present[2] >= 0){
      return true
    } else {
      return false
    }
}