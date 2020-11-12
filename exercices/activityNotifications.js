function activityNotifications(expenditure, d) {
  // Number of notifications
  let n = 0;

  // Set midpoints for median calculation
  let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1, m2, m;
  console.log(i1, i2);

  // Initialize count sorted subarray
  let cs = new Array(201).fill(0);
  for (let i = d - 1; i >= 0; i--) cs[expenditure[i]]++;
  console.log(cs);

  // Iterate through expenditures
  for (let i = d; i < expenditure.length; i++) {
    // Find median
    for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j;
    for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j;
    let m = (m1 + m2) / 2;

    // Check if notification is given
    if (expenditure[i] >= m * 2) n++;

    // Replace subarray elements
    cs[expenditure[i - d]]--;
    cs[expenditure[i]]++;
  }

  return n;
}
let result = activityNotifications([5, 3, 10, 2, 7, 6, 8, 4, 5, 8], 6);
// 2 3 5 6 7 10
//console.log(result);
