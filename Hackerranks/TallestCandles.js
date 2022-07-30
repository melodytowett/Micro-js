function birthdayCakeCandles(candles) {
  let max = candles[0]
  let sumOfTallestCandles = 0
  for(let i=0;i<candles.length;i++){
      if(candles[i]>max){
          max = candles[i]
      }
  }
  for(let i = 0; i<candles.length;i++){
      if(candles[i] == max){
          sumOfTallestCandles ++
      }
  }
  console.log(sumOfTallestCandles)
  // Write your code here
}
birthdayCakeCandles([1, 4, 5, 5, 1])