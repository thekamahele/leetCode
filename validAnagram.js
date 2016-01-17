/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * For example,
 * s = "anagram", t = "nagaram", return true.
 * s = "rat", t = "car", return false.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

	if(s.length !== t.length) {
		return false;
	}

	var sLetters = looper(s);
	var tLetters = looper(t);

	function looper(string) {
		var lettersHash = {};
		for(var i = 0; i < string.length; i++) {
			lettersHash[string[i]] ? lettersHash[string[i]]++ : lettersHash[string[i]] = 1
		}
		return lettersHash;
	}

	for(var letter in sLetters) {
		if(!tLetters[letter] || tLetters[letter] !== sLetters[letter]) {
			return false;
		}
	}

	return true;
};