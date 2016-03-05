/**
 * Implement the following operations of a queue using stacks.
 * push(x) -- Push element x to the back of queue.
 * pop() -- Removes the element from in front of queue.
 * peek() -- Get the front element.
 * empty() -- Return whether the queue is empty.
 *
 * @constructor
 */
var Queue = function() {
	this.length = 0;
	this.storage = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
	this.storage[this.length] = x
	this.length++

};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
	var poppedVal = this.storage.splice(0,1)
	this.length--
	return poppedVal;
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
	return this.storage[0]
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
	return this.length > 0 ? false : true
};