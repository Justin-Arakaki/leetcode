/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let index = 0; index < nums.length; index++) {
		const current = nums[index];
		if (current > target - 2) continue;

		for (let j = index + 1; j < nums.length; j++) {
			const sum = current + nums[j];
			console.log(current, nums[j], sum);
			if (sum === target) return [index, j];
		}
	}

	return false;
};

console.log('ANSWER', twoSum([2, 7, 11, 15], 9));
console.log('ANSWER', twoSum([3, 2, 4], 6));
console.log('ANSWER', twoSum([3, 3], 6));
