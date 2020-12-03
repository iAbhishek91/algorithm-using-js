/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

/* RECURSION */
/* 

Very IMPORTANT to understand this problem, there are many problems with similar issues.
*/
function generateParentheses(n) {
  const ans = []
  _backtrack(ans, "", 0, 0, n);
  return ans;
}

/**
 * 
 * @param {Array} ans : all the possible answer combination
 * @param {String} cur : starting, this will accumulate the brackets
 * @param {int} open : number of open brackets
 * @param {int} close : number of close brackets
 * @param {int} max : total number of brackets
 */
function _backtrack(ans, cur, open, close, max) {
  if (cur.length === max * 2) {
    ans.push(cur);
    return;
  }

  if (open < max)
    _backtrack(ans, cur+"(", open+1, close, max);
  if (close < open)
    _backtrack(ans, cur+")", open, close+1, max);
}


console.log(generateParentheses(2));