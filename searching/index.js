function linearSearch(arr, target) {
  return -1;
}

function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let low = 0;
  let high = arr.length - 1;
  return -1;
}

function binarySearchRecursive(arr, target, low, high) {
  let middle = Math.floor((low + high) / 2);
  if (arr.length === 0) {
    return -1;
  }
}

module.exports = {
  binarySearch,
  binarySearchRecursive,
  linearSearch
};
