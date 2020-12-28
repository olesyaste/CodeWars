function solution(str){
    let ar = [];
     for(let i = 0; i < str.length; i++){
        ar.push(`${str[i]}${str[i+1]}`)
        i++
     };
    if(str.length % 2 === 0) return ar;
    return ar.slice(0, ar.length-1).concat(`${str[str.length-1]}_`);
}
  
solution("abcdef")//, ["ab", "cd", "ef"]);
solution("abcdefg")//, ["ab", "cd", "ef", "g_"]);
solution("")//, []);