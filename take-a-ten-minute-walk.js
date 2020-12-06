function isValidWalk(walk) {
    if(walk.length !== 10){
      return false
    }
      if(walk.join('').split('n').length-1 !== walk.join('').split('s').length-1 ) {
        return false
      } else if (walk.join('').split('e').length-1 !== walk.join('').split('w').length-1) {
        return false
      } 
    return true
}

  isValidWalk(['n','s','n','s','n','s','n','s','n','s']) // 'should return true');
  isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) // 'should return false');
  isValidWalk(['w']) // 'should return false');
  isValidWalk([ 'e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w' ]) // 'should return false');