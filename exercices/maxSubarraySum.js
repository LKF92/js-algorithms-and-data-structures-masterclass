function maxSubarraySum(array, maxLength) {
  let max = 0;
  for (let i = 0; i < maxLength; i++) {
    max += array[i];
  }

  let previous = max;

  for (let i = 0; i < array.length - maxLength; i++) {
    let prev = array[i];
    let next = array[i + maxLength];

    previous = previous - prev + next;

    max = Math.max(previous, max);
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
