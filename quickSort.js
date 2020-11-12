function quickSort(arr, left = 0, right = arr.length - 1) {
  const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
  };
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // Left
    quickSort(arr, left, pivotIndex - 1);
    // Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
quickSort([-1, 3, 4, 13, 1, 3, 43, 23, 12, 22]);
