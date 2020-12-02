/*
Input: s = "()[]{}"
output: boolean
*/

function validParentheses(str) {
  const parenthesesStack = [];

  const parenthesesTempArr = str.split("");

  for(let i = 0; i < parenthesesTempArr.length ; i += 1) {
    const current = parenthesesTempArr[i];
    const top = parenthesesStack[parenthesesStack.length - 1];
    let currentBracketPair = [];

    switch(current) {
      case '(':
      case ')': currentBracketPair = ['(', ')']; break;
      case '[':
      case ']': currentBracketPair = ['[', ']']; break;
      case '{':
      case '}': currentBracketPair = ['{', '}']; break;
      default: continue;
    }

    // push only if we have open brackets
    if (current === currentBracketPair[0]) { 
      parenthesesStack.push(current);
      continue;
    }

    // pop only if valid else return false
    // if (current === currentBracketPair[1]) { // this condition is not required as this is the only condition
      if (top === currentBracketPair[0]) {
        parenthesesStack.pop();
      } else {
        return false;
      }
    //}
  }

  if (parenthesesStack.length === 0) return true;
  return false;
}


module.exports = validParentheses;
