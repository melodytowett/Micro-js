
// function Divisible(nums) {
  
//   for (let i = 0; i < nums.lenght; i++){
//     let divNum = nums[i]
//     if (nums[i] % 11 == 0 && nums[i] == Math.min) {
//       console.log(divNum)
//     }
//     return divNum
//   }
 
// }
// console.log(Divisible([11,12,1,2,3,8]))
function solution(arr){
  let value = []
  for (let i=0; i< arr.length;i++){
      if(arr[i]%4 == 0)
      {
          if(arr[i] > value)
          {
              value = arr[i]
          }
      }
  }
  return value
}
console.log(solution([-6,-61,1011,-100,-22,0,1,84,88]))