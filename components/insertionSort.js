function insertionSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [3, 1, 3, 2, 5, 4, 8];
insertionSort(arr);
console.log(arr);
