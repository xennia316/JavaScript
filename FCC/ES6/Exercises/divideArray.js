function chunkArrayInGroups(arr, size) {
  let finale = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      finale.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) {
    finale.push(temp);
  }
  return finale;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);
