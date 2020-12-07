function createPhoneNumber(numbers){
    let str = numbers.toString().split(',').join('');
    return `(${str.substr(0, 3)}) ${str.substr(3, 3)}-${str.substr(6, str.length-1)}`;
}
  
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])// "(123) 456-7890");
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])// "(111) 111-1111");
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])// "(123) 456-7890");