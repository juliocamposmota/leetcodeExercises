function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; 
      k += 1;
    }
  }

  return k;
};

const ex1Nums = [3,2,2,3]
const ex1Val = 3

const ex2Nums = [0,1,2,2,3,0,4,2]
const ex2Val = 2

console.log(removeElement(ex1Nums, ex1Val)) // Output: 2
console.log(removeElement(ex2Nums, ex2Val)) // Output: 5
