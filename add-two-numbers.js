/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	const sumList = new ListNode();
	let currentL1 = l1;
	let currentL2 = l2;
	let currentSumList = sumList;
	let sum, carry, remainder;

	while (currentL1 || currentL2) {
		sum = (currentL1?.val || 0) + (currentL2?.val || 0) + (carry || 0);
		carry = Math.floor(sum / 10);
		remainder = sum % 10;

		currentSumList.next = new ListNode(remainder);

		currentL1 = currentL1?.next || null;
		currentL2 = currentL2?.next || null;
		currentSumList = currentSumList.next;
	}

	if (carry) {
		currentSumList.next = new ListNode(1);
	}
	return sumList.next;
};
