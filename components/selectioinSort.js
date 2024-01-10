function selectionSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      minIndex = arr[minIndex] < arr[j] ? minIndex : j
    }
    swap(arr, minIndex, i)
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [3, 1, 3, 2, 5, 4, 8];
selectionSort(arr);
console.log(arr);