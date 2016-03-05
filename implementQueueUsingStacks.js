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
	this.inbox = [];
	this.outbox = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
	this.inbox.push(x)
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
	if(this.outbox.length > 0) {
		return this.outbox.pop()
	} else {
		while(this.inbox.length > 0) {
			this.outbox.push(this.inbox.pop())
		}
		return this.outbox.pop()
	}

};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
	if(this.outbox.length > 0) {
		return this.outbox[this.outbox.length - 1]
	} else {
		return this.inbox[0]
	}
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
	if(this.outbox.length > 0 || this.inbox.length > 0) {
		return false
	} else {
		return true
	}

};