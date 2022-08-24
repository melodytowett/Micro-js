function solution(A, B, X, Y) {
  let iconA = [];
   let iconB = [];
  let arrA = A[Math.floor(Math.random() * A.length)];
  let arrB = B[Math.floor(Math.random() * B.length)];
 let choosenIndex = Math.random() >= 0.5 ? arrA : arrB;
let choosenTap = Math.random() >= 0.5 ? X : Y;
      if (choosenIndex == arrA) {
          if (choosenTap == X) {
              iconA.unshift(arrA);
              iconA.push(X);
              console.log(iconA);
              // console.log(arrA, "arrA");
              // console.log(X, "X")
              return iconA;
          } else if (choosenTap == Y) {
              iconA.unshift(arrA);
              iconA.push(Y);
              console.log(iconA);
              // console.log(arrA,"arrA");
              // console.log(Y,"Y")
              return iconA;
             
          } else {
              return -1;
          }
          
          
          
      } else if (choosenIndex == arrB) {
          if (choosenTap == X) {
              iconB.unshift(arrB);
              iconB.push(X);
              console.log(iconB);
              // console.log(arrB, "arrB");
              // console.log(X, "X")
              return iconB;
          } else if (choosenTap == Y) {
   iconB.unshift(arrB);
   iconB.push(Y);
   console.log(iconB);
 // console.log(Y,"Y")
  return iconB;
 } else {
 return -1;
 }
 
  }
   else {
 return -1;
  }
  
  
  
  }
  solution([200, 100, 300, 100], [50, 100, 200, 300], 200, 100)