function deleteNth(arr, n){
    return arr.reduce((a, b) => {
      if (a.filter(x => x === b).length < n) a.push(b);
      return a;
    }, [])
}