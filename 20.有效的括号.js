/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const pairMap = {
  '(': ')',
  '[': ']',
  '{': '}',
}
var isValid = function(s) {
  let stack = [];

  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    if (['{', '[', '('].includes(char)) {
      stack.push(char);
      continue;
    }

    if (pairMap[getPeek(stack)] === char) {
      stack.pop();
    } else {
      return false
    }
  }

  return stack.length === 0;
};

function getPeek(arr) {
  return arr[arr.length - 1];
}
// @lc code=end
// const s = "()";
// console.log('isValid(s)', isValid(s))