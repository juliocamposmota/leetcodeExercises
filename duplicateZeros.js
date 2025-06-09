function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i - 1] === 0) {
      for (let j = arr.length - 2; j >= i; j -= 1) {
        arr[j + 1] = arr[j]
      }

      arr[i] = 0
      i += 1
    }
  }
};

duplicateZeros([1,0,2,3,0,4,5,0])
