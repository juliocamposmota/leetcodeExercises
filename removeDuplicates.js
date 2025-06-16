/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
  let k = 0

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; 
      k += 1;
    }
  }

  return k
}

const ex1Nums = [1,1,2]
const ex2Nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(ex1Nums))
console.log(removeDuplicates(ex2Nums))