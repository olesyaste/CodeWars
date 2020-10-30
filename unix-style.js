function uniq(a) {
    let ar = []
    for(let i = 0; i < a.length; i++){
      if(a[i] !== a[i+1]){
        ar.push(a[i])
      }
    }
    return ar
}