function dashatize(num) {
    let s = num.toString().split('')
    if(s[0] === '-'){
       s = s.slice(1)
    } else {
       s
    }
    if(typeof num === "number" && num){
      for(let i = 0; i < s.length; i++){
        if(s[i]%2 != 0 && s[i+1] % 2 === 0){
          s[i] = `${s[i]}-`
        }
        if(s[i]%2 != 0 && s[i-1] % 2 === 0){
          s[i] = `-${s[i]}`
        }
        if(s[i] % 2 != 0 && s[i+1] % 2 !== 0 && s[i] !== s[s.length-1]){
           s[i] = `${s[i]}-`
        }
        if(s[i]%2 === 0 && s[i+1] % 2 !== 0 && s[i] !== s[s.length-1]){
           s[i] = `${s[i]}-`
        }
         if(s[i]%2 !== 0 && s[i] === s[s.length-1] && !s[i].includes('-') && s[i] !== s[0] && !s[i-1].includes('-')){
           s[i] = `-${s[i]}`
        }
      }
    }
    return s.join('')
  }