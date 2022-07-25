//Create the bigger array
let bigArray = [];
let extcounter = 9
for (let i = 0; i < 3; i++){
  //create the subarrays to be pushed to the big array 
  let littleArray = [];
  for (let j = 0; j < 3; j++){
    littleArray.push(extcounter)
    extcounter --
  }
  bigArray.push(littleArray)

}
console.log(bigArray)
function greetings(name) {
  console.log("Hello",name)
}
greetings("melody")