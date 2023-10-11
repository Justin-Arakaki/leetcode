/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
	const comp = new Map();
	for (let i = 0; i < nums.length; i++) {
		const currentComp = nums[i];

		if (comp.has(currentComp)) {
			return [comp.get(currentComp), i];
		}

		comp.set(target - nums[i], i);
	}
};

console.log('ANSWER', twoSum([2, 7, 11, 15], 22));
