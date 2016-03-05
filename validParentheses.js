/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var matches = {
		"(": ")",
		"[": "]",
		"{": "}"
	};

	var stack = [];

	for(var i = 0; i <= s.length; i++) {
		var current = s[i]
		if(matches[current]) {
			stack.push(current)
		} else {
			var opener = stack.pop();
			if(matches[opener] !== current) {
				return false
			}
		}
	}

	return true
};