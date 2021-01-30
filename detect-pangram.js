function isPangram(string){
    let ar = string.split('');
    let al = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let mapped = ar.map(el => el.toLowerCase())
   let arr = []
    for(let i = 0; i < mapped.length; i++){
      if(al.indexOf(mapped[i]) !== -1) arr.push(mapped[i])
    }
     let s = [...new Set(arr)].sort();
     return s.toString() === al.toString()
}

//isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ');
//isPangram("The quick brown fox jumps over the lazy dog.");