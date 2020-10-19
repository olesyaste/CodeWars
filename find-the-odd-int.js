function findOdd(A) {
    let count = 0;
    for(let i = 0; i < A.length; i++) {
      for(let j = 0; j < A.length; j++) {
            if(A[i] == A[j]) {
              count++;
            }
          }
      if (count % 2 !== 0) {
          return A[i];
      }
    }
  }

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
//5);
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
//-1);
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]);
//5);
findOdd([10]);
//10);
findOdd([1,1,1,1,1,1,10,1,1,1,1]);
//10);