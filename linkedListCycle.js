/**
 * Given a linked list, determine if it has a cycle in it.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	var slow = head;
	var fast = head;

	while(slow && fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if(fast === slow) {
			return true;
		}
	}

	return false;
};