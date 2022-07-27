function isPrime(a){
  if(a == 2){
    return true;
  }
  for(let i = 2; i < a; i++){
    if(a % i == 0){
      return false;
    }
  }
  return true
}
function sumPrimes(num) {
  let sum = 0;
  for(let i = 2; i<=num;i++){
    if(isPrime(i)){
      sum += i
    }
  }
  return sum;
}

console.log(sumPrimes(977));