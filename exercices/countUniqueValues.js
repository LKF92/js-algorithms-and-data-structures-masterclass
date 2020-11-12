function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let left = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[left] !== arr[i]) {
      left++;
      arr[left] = arr[i];
    }
  }
  console.log(left + 1);
  return left + 1;
}

// countUniqueValues([1, 1, 1, 2]); //2
// countUniqueValues([1, 2, 3, 4, 4, 4, 5, 7, 7, 7, 12, 13, 13]); //8
// countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1, 3]); // 5
