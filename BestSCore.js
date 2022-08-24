
function breakingRecords(scores) {
  let highScore = 0;
  let lowScore = 0;
  let max = scores[0];
  let min = scores[0];
  for(let i = 1; i <scores.length; i++){
      if(scores[i] > max){
          max = scores[i]
          highScore+=1
      }
      if(scores[i]<min){
          min=scores[i];
          lowScore+=1
      }
  }
  console.log([highScore,lowScore])
  // Write your code here

}
breakingRecords([10,5,20,20,4,5,2,251])