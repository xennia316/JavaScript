function getIndexToIns(arr, num) {
  let newArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] >= num) {
      return i;
    }
  }
  return newArr.length;
}

getIndexToIns([40, 60, 3], 50);
