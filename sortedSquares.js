const nums1 = [-4,-1,0,3,10]
const nums2 = [-7,-3,2,3,11]

function sortedSquares(nums) {
  return nums.map(num => num * num).sort((a, b) => a - b);
};

console.log(sortedSquares(nums1)); // Output: [0,1,9,16,100]
console.log(sortedSquares(nums2)); // Output: [4,9,9,49,121]
