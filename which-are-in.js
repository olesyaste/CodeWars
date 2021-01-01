a1 = ["xyz", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1,array2){
  let a = [];
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
    if(array2[j].includes(array1[i])) a.push(array1[i]);
    };
  };
  return [...new Set(a)].sort()
}

inArray(a1, a2)// ["live", "strong"]);