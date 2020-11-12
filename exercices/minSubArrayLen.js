function minSubArrayLen(arr, num) {
  let sum = 0;
  let minLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    minLength++;
    if (sum >= num) {
      break;
    }
  }

  for (let i = 0; i < arr.length - minLength; i++) {
    console.log("-------i-------", i);
    let prev = arr[i];
    let next = arr[minLength + i];

    sum = sum + next - prev;

    if (sum > num) {
      let shorter = sum - arr[i + 1];
      if (shorter >= num) {
        sum = shorter;
        i++;
        minLength--;
      }
    }
  }
  console.log("THE MIN LENGTH IS : ", minLength);
  return minLength;
}

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
