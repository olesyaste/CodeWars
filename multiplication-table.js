multiplicationTable = function(size) {
    let result = [];
    for (let i = 1; i <= size; i++) {
      result.push(elemIncrease(i, size));
    }
    return result;
  }

  function elemIncrease(incrNum, sizeNum) {
    let ar = [];
    let sum = 0;
    for (let i = 0; i < sizeNum; i++) {
      sum += incrNum;
      ar.push(sum);
    }
    return ar;
}

multiplicationTable(3);
//[[1,2,3], [2,4,6], [3,6,9]]