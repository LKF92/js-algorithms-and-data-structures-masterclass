function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log("-----------------", char);

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;

    console.log("seen", seen);
    console.log("longest", longest);
    console.log("start", start);
  }
}

// findLongestSubstring('')
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("longestsubstring"); // 8\
