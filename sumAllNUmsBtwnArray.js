function sumAll(arr) {
  let first = arr[0]
  let last = arr[1]

  if(last < first){
    last=arr[0];
    first=arr[1];
  }
  let sum = 0
  for(let i= first; i<=last;i++){
    sum += i
  }
   
 return sum; 
}


let result = sumAll([5, 10]);
console.log(result)