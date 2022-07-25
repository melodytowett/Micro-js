function reverseString(str) {
  let reStr = "";
  for(let i=str.length-1; i>=0; i--){
    console.log(str[i])
    reStr += str[i]
  }
  
  return reStr;
}
let output = reverseString("hello");
console.log(output)