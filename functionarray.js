function multiply(arr) {
  let output = []
  for (let i = 0; i < arr.length; i++){
    output .push(arr[i]*5)
  }
  return output
}
let result = multiply([2, 3, 4, 5, 6])
console.log(result)