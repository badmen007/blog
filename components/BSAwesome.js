// 局部最小值问题
// 首先要明白局部最小值的定义 
// 1. 如果数组的第一个比第二个小，那么它就是局部最小值
// 2. 如果数组中最后一个值比它前一个小的话，那么数组中最后一个就是局部最小值
// 3. 二分法 如果中间的值大于它前面位置的，那么right就等于mid-1.
//    如果中间的值大于它后面的，那么left就等于mid+100
//    如果不满足上面的条件说明此时mid的值比两边都要小，那么它就是局部最小值 返回
// 4. 最后的返回left或者是right即可，因为他们两个是同一个值，也就是二分的边界


function getLessIndex(arr) {
  if (arr == null || arr.length == 0) {
    return -1
  }
  if (arr.length == 1 || arr[0] < arr[1]) {
    return 0
  }
  if (arr[arr.length - 1] < arr[arr.length - 2]) {
    return arr.length - 1
  }
  let left = 1;
  let right = arr.length - 2;
  let mid = 0;

  while (left < right) {
    mid = left + ((right - left) >> 1)
    if (arr[mid] > arr[mid - 1]) {
      right = mid - 1
    } else if (arr[mid] > arr[mid + 1]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return left
}

// for test
function isRight(arr, index) {
  if (arr.length <= 1) {
    return true
  }
  if (index === 0) {
    return arr[index] < arr[index + 1]
  }
  if (index === arr.length - 1) {
    return arr[index] < arr[index - 1]
  }

  return arr[index] < arr[index - 1] && arr[index] < arr[index + 1]
}

function generateRandomArray(maxSize, maxValue) {
  const arr = new Array(Math.floor(Math.random() * (maxSize + 1)))
  arr[0] = Math.floor(Math.random() * maxValue) - Math.floor(Math.random() * maxValue)
  for (let i = 1; i < arr.length; i++) {
    do {
      arr[i] = Math.floor(Math.random() * maxValue) - Math.floor(Math.random() * maxValue)
    } while (arr[i] == arr[i - 1]);
  }
  return arr;
}

function test() {
  const maxSize = 100;
  const maxValue = 100;
  const testTimes = 10000;
  let succeed = true
  for (let i = 0; i < testTimes; i++) {
    const arr = generateRandomArray(maxSize, maxValue)
    const ans = getLessIndex(arr)
    if (!isRight(arr, ans)) {
      succeed = false
      console.log(getLessIndex(arr));
      console.log(arr)
      break
    }
  }
  console.log(succeed ? 'Nice' : 'Fuck')
}

test()
