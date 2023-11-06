const getIndexToIns = (arr, num) =>
arr.concat(num).sort((a,b) => a - b).indexOf(num)

console.log(getIndexToIns([2,10,5], 15));