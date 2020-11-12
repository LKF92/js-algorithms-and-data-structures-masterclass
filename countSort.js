function countingSort(arr, maxValue) {
  const sorting = Array.from({ length: maxValue }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    sorting[arr[i]] += 1;
  }

  let result = [];

  for (let i = 0; i < sorting.length; i++) {
    if (sorting[i]) {
      while (sorting[i]) {
        result.push(i);
        sorting[i]--;
      }
    }
  }

  return result;
}
