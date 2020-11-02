/*
Name: Chase Jamieson
Assignment: CS320 HW4

primeGen(n) is given a thresh hold and
returns an array of primes up to inputted number.
 */
function primeGen(threshhold) {
  const values = [];
  const upper = Math.sqrt(threshhold);
  const output = [];

  let i;
  let j;
  for (i = 0; i < threshhold; i++) {
    values.push(true); // initializing the array true
  }

  for (i = 2; i <= upper; i++) {
    for (j = i * i; j < threshhold; j += i) {
      values[j] = false; // values with multiples set to false
    }
  }

  for (i = 2; i < threshhold; i++) {
    if (values[i]) {
      output.push(i); // create and return new array with just true primes
    }
  }

  return output;
}
/*
cumulativeSum(list) takes a list of numbers,
and returns the cumulative sum of them.
cumulativeSum([1,2,3,4]) -> [1,3,6,10]
 */
function cumulativeSum(list) {
  const output = [];
  let n = 0;
  let i;

  for (i = 0; i < list.length; i++) {
    n += list[i];
    output.push(n); // take current value, add next and push to output array
  }

  return output;
}
/*
maxPrimeSum returns the longest sum of consecutive primes
which add up below inputted number. returns sum and number of primes.
maxPrimeSum(100) -> [41,6]
 */
function maxPrimeSum(n) {
  let primes = primeGen(n);
  const primesTemp = primes;
  let sums = cumulativeSum(primes);
  const output = [];
  const output2 = [];
  let output3 = [0, 0]; // each output var is another step of sorting data

  let i; let num; let k; let j;
  for (i = 0; i < primes.length; i++) {
    num = 0;
    k = 0;
    while (num < n) {
      num = sums[k];
      k++;
      output.push([num, k]); // first array is sums while popping off stack.
    }
    // output.push([prev,k - 1]);
    primesTemp.shift();
    sums = cumulativeSum(primesTemp);
  }

  primes = primeGen(n);
  for (i = 0; i < output.length; i++) {
    for (j = 0; j < primes.length; j++) {
      if (output[i][0] === primes[j]) {
        output2.push(output[i]); // take the first array sums, sort new array of prime sums.
      }
    }
  }

  for (i = 0; i < output2.length; i++) {
    if (output2[i][1] > output3[1]) {
      output3 = output2[i]; // search for greatest consecutive num count and return that as output3
    }
  }
  return output3;
}

primeGen(100);
cumulativeSum(0);
maxPrimeSum(1500);
