function goodVsEvil(good, evil){
    let goodArr = [1, 2, 3, 3, 4, 10];
    let evilArr = [1, 2, 2, 2, 3, 5, 10];
    let g = good.split(' ')
    let e = evil.split(' ')
    let gPoints = 0
    let ePoints = 0
    for(let i = 0; i < g.length; i++){
      if(+g[i] > 0){
        gPoints += +g[i]*goodArr[i]
      }
    }
    for(let i = 0; i < e.length; i++){
      if(+e[i] > 0){
        ePoints += +e[i]*evilArr[i]
      }
    }
   if (gPoints > ePoints) return 'Battle Result: Good triumphs over Evil'
    if (gPoints < ePoints) return 'Battle Result: Evil eradicates all trace of Good'
    return 'Battle Result: No victor on this battle field'
  }
  
  goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')// === 'Battle Result: Good triumphs over Evil', 'Good should win' );
  goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')// === 'Battle Result: No victor on this battle field', 'Should be a tie' );