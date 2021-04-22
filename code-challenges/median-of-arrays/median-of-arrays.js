/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let p = nums1.concat(nums2).sort((a, b) => a - b);
    let medianLength = Math.round(p.length / 2);
    if(p.length % 2 === 0) {
        return (p[medianLength - 1] + p[medianLength])/2;
    } else {
        return p[medianLength - 1];
    }
    console.log(p, medianLength);
    
};
