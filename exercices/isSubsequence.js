function isSubsequence(str1, str2) {
  let left = 0;
  let right = 0;

  while (right < str2.length) {
    if (str1[left] === str2[right]) {
      left++;
      right++;
    } else {
      right++;
    }
    if (left === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
