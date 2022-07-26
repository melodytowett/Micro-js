function chunkArrayInGroups(arr, size) {
  let bigArray = []
  let subArray = []
  let counter = 0
  for(let i = 0; i<arr.length;i++){
      if(counter === size){
        counter = 0
        bigArray.push(subArray)
        subArray = []
      }
      subArray.push(arr[i])
      counter ++ 
  }  
  bigArray.push(subArray)
  console.log(bigArray)
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);