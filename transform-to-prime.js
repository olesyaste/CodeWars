function minimumNumber(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    let num = sum;
    if (num % 2 === 0) {
      num++;
    }
    for (let i = 3; i < num; i += 2) {
      if (num % i === 0) {
        num += 2;
        i = 1;
      }
    }
    return num - sum;
}
  
  minimumNumber([3,1,2]);
  //1);
  minimumNumber([5,2]);
  //0);
  minimumNumber([1,1,1]);
  //0);
  minimumNumber([2,12,8,4,6]);
  //5);
  minimumNumber([50,39,49,6,17,28])
  //2);