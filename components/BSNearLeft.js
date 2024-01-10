
// 在一个有序数组中，找到>=某个数最左侧的位置

function nearestIndex(arr, value) {
  let L = 0
  let R = arr.length - 1
  let M = 0
  let index = -1
  while(L <= R) {
    M = L + ((R - L) >> 1)
    if (arr[M] >= value) {
      index = M;
      R = M - 1
    } else {
      L = M + 1
    }
  }
  return index
}

// for test
function test(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return -1;
}

function generateRandomArray(maxSize, maxValue) {
  const arr = new Array(Math.floor((maxSize + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      Math.floor((maxValue + 1) * Math.random()) -
      Math.floor(maxValue * Math.random());
  }
  return arr;
}

function main() {
  const testTime = 500000;
  const maxSize = 10;
  const maxValue = 100;
  let succeed = true;
  for (let i = 0; i < testTime; i++) {
    const arr = generateRandomArray(maxSize, maxValue);
    arr.sort((a, b) => a - b);
    const value =
      Math.floor((maxValue + 1) * Math.random()) -
      Math.floor(maxValue * Math.random());
    if (test(arr, value) !== nearestIndex(arr, value)) {
      succeed = false;
      console.log(arr, value, test(arr, value));
      console.log(arr, value, nearestIndex(arr, value));
      break;
    }
  }
  console.log(succeed ? "Nice!" : "Fucking fucked!");
}

main();