function factorialize(num) {
  let output= 1
  for(let i = 2; i <= num; i++){
    output*=i
  }
  return output;
}

let result=factorialize(10);
console.log(result)