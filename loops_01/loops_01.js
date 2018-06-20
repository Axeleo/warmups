console.log('leap year loop')
for (var year = 1918; year < 2018; year ++) {
 
  if (year % 4 != 0){

  } else if (year % 100 != 0){
      console.log(year + ' is a leap year!')
  } else if (year % 400 != 0){

  } else {
      console.log(year + ' is a leap year!')
  }
}

console.log('loop challenge 2')
for (i = 1; i < 201; i++){
  if (i % 7 === 0){
    console.log(i + ' is a multiple of 7')
  }
  if (i % 4 === 1){
    console.log(i + ' every other odd number')
  }
  if (i % 2 != 0 && i % i === 1){
    console.log(i + ' is a prime number')
  }
}

// Kasun solution

// function isPrime(num) {
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function getPrimes(final) {
//   var primes = [2];
//   for (var num = 3; num < final; num += 2) {
//     if (isPrime(num)) {
//       primes.push(num);
//     }
//   }
//   return primes;
// }

// var primes = getPrimes(200);
// console.log(primes.join(', '));