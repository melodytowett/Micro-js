function destroyer(arr) {
  let output = [];
  let input = arguments[0];
  let destroyed = []
  for(let i = 1;i<arguments.length;i++){
    destroyed.push(arguments[i])
  }
  console.log(destroyed)
  for(let i =0;i<input.length;i++){
    if( destroyed.includes (input[i]) === false){
      output.push(input[i])

    }
  }
  
  return output;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));