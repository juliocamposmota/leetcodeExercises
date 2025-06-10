function merge(nums1, m, nums2, n) {
  for (let i = 0; i < m + n; i += 1) {
    if (!!nums2[n - i - 1]) {
      nums1[m + n - i - 1] = nums2[n - i - 1];
    }
  }

  for (let i = 0; i < nums1.length; i += 1) {
    for (let j = 0; j < nums1.length - i - 1; j += 1) {
      if (nums1[j] > nums1[j + 1]) {
        [nums1[j], nums1[j + 1]] = [nums1[j + 1], nums1[j]];
      }
    }
  }
};

const nums1Ex1 = [1,2,3,0,0,0]
const mEx1 = 3
const nums2Ex1 = [2,5,6]
const nEx1 = 3

const nums1Ex2 = [4,5,6,0,0,0]
const mEx2 = 3
const nums2Ex2 = [1,2,3]
const nEx2 = 3

merge(nums1Ex1, mEx1, nums2Ex1, nEx1);
merge(nums1Ex2, mEx2, nums2Ex2, nEx2);
