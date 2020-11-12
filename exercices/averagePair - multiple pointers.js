function averagePair(arr, average) {
  let left = 0;
  let right = arr.length - 1;
  while (left !== right) {
    let currAverage = (arr[left] + arr[right]) / 2;

    if (currAverage > average) {
      right--;
    } else if (currAverage < average) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}

let one = averagePair([1, 2, 3], 2.5); // true
let two = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
let three = averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
console.log(one, two, three);
