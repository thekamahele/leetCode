/** For prompt see: https://leetcode.com/problems/bulls-and-cows/
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = 0;
    var cows = 0;
    var secretHash = {};
    var possibleCow = [];

    for(var i = 0; i < secret.length; i++) {
        if(!secretHash[secret[i]]) {
            secretHash[secret[i]] = [i]
        } else {
            secretHash[secret[i]].push(i)
        }
    }

    for(var j = 0; j < guess.length; j++) {
        if(secretHash[guess[j]]){
            //var found = secretHash[guess[j]].indexOf(j);
            if(secretHash[guess[j]].indexOf(j) !== -1) {
                bulls++;
                secretHash[guess[j]].splice(secretHash[guess[j]].indexOf(j), 1)
            } else {
                possibleCow.push(j)
            }
        }
    }

    for(var k = 0; k < possibleCow.length; k++) {
        if(secretHash[guess[possibleCow[k]]]) {
            if (secretHash[guess[possibleCow[k]]].length !== 0) {
                cows++
                secretHash[guess[possibleCow[k]]].pop();
            }
        }
    }

    return "" + bulls + "A" + cows + "B"
};