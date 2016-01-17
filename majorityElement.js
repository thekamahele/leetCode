/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var elements = {};
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] in elements) {
            elements[nums[i]]++
        } else {
            elements[nums[i]] = 1;
        }
    }
    
    var greatest = 0;
    var greatestKey;
    for(var key in elements) {
        if(elements[key] > greatest) {
            greatest = elements[key];
            greatestKey = key
        }
    }
    
    return +greatestKey;
};