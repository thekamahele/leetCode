/**
 * Given an array of integers, find if the array contains any duplicates. Your function should return true if
 * any value appear at least twice in the array, and it should return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var talliedNumbers = nums.reduce(function(tallied, num) {
		tallied[num] ? tallied[num] += 1 : tallied[num] = 1;
		return tallied;
	}, {})

	for(var number in talliedNumbers) {
		if(talliedNumbers[number] > 1) {
			return true;
		}
	}

	return false;
};