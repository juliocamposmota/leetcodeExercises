const nums1 = [1,1,0,1,1,1]
const nums2 = [1,0,1,1,0,1]

function findMaxConsecutiveOnes(nums) {
    let oneCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        oneCount++;
      } else {
        oneCount = 0;
      }

      if (oneCount > maxCount) {
        maxCount = oneCount;
      }
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes(nums1)); // Output: 3
console.log(findMaxConsecutiveOnes(nums2)); // Output: 2
