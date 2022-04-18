/**
 * Case 3
 * input -> seHAtQ
 * output -> SEhaTq
 */
function reverseCap(str) {
  let arr = str.split('');
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      result.push(arr[i].toUpperCase());
    } else if (arr[i] === arr[i].toUpperCase()) {
      result.push(arr[i].toLowerCase());
    }
  }
  return result.join('');
}
console.log(reverseCap('seHAtQ'));

/**
 * Case 4
 * Input : [2, 3, 6, 6, 5]
 * Output : 5
 * No Duplicate
 */
function highestNoDupe(arr) {
  var maxNum = Math.max.apply(Array, arr);
  var filteredNoDupe = arr.filter(function(item) {
    return item !== maxNum;
  });
  return Math.max.apply(Array, filteredNoDupe);
}
console.log(highestNoDupe([2, 3, 6, 6, 5]));

/**
 * Case 5
 * Perpangkatan tanpa (**)
 */
function squaredNum(num, sqr) {
  let result = [];
  if (sqr === 0) {
    return 1;
  } else if (sqr === 1) {
    return num;
  } else if (sqr > 1) {
    for (var i = 0; i <= sqr; i++) {
      result = num * num;
    }
    return result;
  }
}
console.log(squaredNum(2, 2));
console.log(squaredNum(2, 3));
console.log(squaredNum(3, 2));
console.log(squaredNum(5, 0));
console.log(squaredNum(2, -2));
