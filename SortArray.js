function getIndexToIns(arr, num) {
  let output = 0
 
  for(let i =0;i<arr.length;i++){
    if(arr[i] < num){
      output++
    }
  }
  return output;
}

let result = getIndexToIns([10, 20, 30, 40, 50], 35);
console.log(result)