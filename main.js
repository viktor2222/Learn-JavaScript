//Output prime numbers
nextTime:
for(let primeNumber = 2; primeNumber <= 10; primeNumber++){
  for(a = 2; a < primeNumber; a++){
    if(primeNumber % a == 0) continue nextTime;
  }
  alert(primeNumber);
}
