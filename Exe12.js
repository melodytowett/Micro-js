let arr = [1, 2, 3, 4];
function reverse(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 1) {
      output.push("one");
    }
    if (arr[i]===2) {
      output.push("two")
    }
    if (arr[i]===3) {
      output.push("three")
    }
    if (arr[i]===4) {
      output.push("four")
    }
  }
  return output
}
let result = reverse(arr)
console.log(result)