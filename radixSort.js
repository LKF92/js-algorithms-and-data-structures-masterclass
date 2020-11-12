const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  return num.toString().length;
};

const mostDigit = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (digitCount(arr[i]) > max) max = digitCount(arr[i]);
  }
  return max;
};

function radixSort(arr) {
  const maxDigit = mostDigit(arr);
  for (let k = 0; k < maxDigit; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = digitBuckets.flat();
  }
  console.log(arr);
  return arr;
}

radixSort([1234, 345, 0, 345, 3, 100, 23456]);
