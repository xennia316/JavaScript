function chunkArrayInGroups(arr, size) {
  let final = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      final.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) {
    final.push(temp);
  }
  return final;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);
