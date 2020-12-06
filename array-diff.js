function arrayDiff(a, b) {
    if(a.length === 0) return [];
    if(b.length === 0) return a;
    let diff = [];
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < b.length; j++){
      if(a[i] !== b[j]) diff.push(a[i])
        j++
     }
    }
    let as = a.sort().toString();
    let bs = b.sort().toString();
    if(as === bs){
     return []
    }
    let newAr = [...new Set(diff)]
    let isSame = (newAr.length == a.length) && newAr.every(function(element, index) {
      return element === a[index]; 
    });
    if (isSame){
      return []
    } else return diff
}

  arrayDiff([7,12,-6,16,1,-4,-5,6,-10,5,15,-13,-10],[-6,1,12])
  arrayDiff([20,-12,-2,1,-17,1,-16,12,4],[-2,1,4,20,-16,-12,-17,12,1])
  arrayDiff([17,-8,13,0,-1,6,-6,-4,14,-3,-14],[13,14]) // [17, -8, 0, -1, 6, -6, -4, -3, -14]
  arrayDiff([12,-5,20,4,13,3,7,16,-13,-6,-3,-2,-20],[12]) //[-5, 20, 4, 13, 3, 7, 16, -13, -6, -3, -2, -20]
  arrayDiff([], [4,5])
  //[], "a was [], b was [4,5]");
  arrayDiff([3,4], [3])
  //[4], "a was [3,4], b was [3]");
  arrayDiff([1,8,2], [])
  //[1,8,2], "a was [1,8,2], b was []");
  arrayDiff([1,2,2], [1]) //[1]
  arrayDiff([6,-18,14,15,-4],[-18,-4,6,14,15])