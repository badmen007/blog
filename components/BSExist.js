function exist(sortedArr, num) {
  if (sortedArr == null || sortedArr.length == 0) {
    return false;
  }
  let L = 0;
  let R = sortedArr.length - 1;
  let mid = 0;

  while (L < R) {
    mid = L + ((R - L) >> 1);
    if (sortedArr[mid] == num) {
      return true;
    } else if (sortedArr[mid] < num) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return sortedArr[L] == num;
}

// for test
function generateRandomArray(maxSize, maxValue) {
  const arr = new Array(Math.floor(Math.random() * maxSize));
  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      Math.floor(Math.random() * (maxValue + 1)) -
      Math.floor(Math.random() * maxValue);
  }
  return arr;
}

function isRight(arr, value) {
  return arr.includes(value);
}

function test() {
  const maxSize = 10;
  const maxValue = 100;
  const testTimes = 100000;
  let succeed = true;
  for (let i = 0; i < testTimes; i++) {
    const arr = generateRandomArray(maxSize, maxValue);
    arr.sort((a, b) => a - b);
    const value =
      Math.floor(Math.random() * (maxValue + 1)) -
      Math.floor(Math.random() * maxValue);
    if (isRight(arr, value) !== exist(arr, value)) {
      succeed = false;
      console.log(arr)
      console.log(isRight(arr, value), 'right');
      console.log(exist(arr, value), 'exist');
      break;
    }
  }
  console.log(succeed ? "Nice" : "Fuck");
}

test();
