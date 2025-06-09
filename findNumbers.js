const nums1 = [12,345,2,6,7896]
const nums2 = [555,901,482,1771]

function findNumbers(nums) {
  let evenCount = 0;

  for (const num of nums) {
    const digitCount = num.toString().length;

    if (digitCount % 2 === 0) {
      evenCount++;
    }
  }

  return evenCount;
};

console.log(findNumbers(nums1)); // Output: 2
console.log(findNumbers(nums2)); // Output: 1
