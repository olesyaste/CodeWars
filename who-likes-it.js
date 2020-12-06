function likes(names) {
    if(names.length === 0) return 'no one likes this';
    if(names.length === 1) return `${names} likes this`
    if(names.length >= 2){
      let result;
      let sl = names.slice(0, names.length-1)
      let sl4 = names.slice(0, 2)
      for(let i = 0; i < names.length; i++){
       if(names.length < 4){
       result = `${sl.join(', ')} and ${names[names.length-1]} like this`
       } else {
         result = `${sl4.join(', ')} and ${names.length-2} others like this`
       }
      }
      return result
    }
}
  
  likes([]) // 'no one likes this');
  likes(['Peter']) // 'Peter likes this');
  likes(['Jacob', 'Alex']) // 'Jacob and Alex like this');
  likes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this');
  likes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this');