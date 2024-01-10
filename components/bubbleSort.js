function bubbleSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const arr = [3, 1, 3, 2, 5, 4, 8];
bubbleSort(arr);
console.log(arr);
