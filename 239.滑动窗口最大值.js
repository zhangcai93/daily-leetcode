/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */


// 维护一个双端队列长度为k；
// 队列中存放的是队列中最大值的索引（记录索引可以随时比对元素是否在滑动窗口内）
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length;

  let que = [];
  let res = [];
  
  for (let i = 0; i < len; i ++) {
    const item = nums[i];

    // 检查队列中的元素， 小于当前item循环出队
    while(que.length && nums[peek(que)] <= item) {
      que.pop();
    }
    que.push(i);

    // 队首元素索引超出窗口范围，移除队首元素
    if (i - que[0] >= k) {
      que.shift()
    }

    if (i >= k-1) {
      res.push(nums[que[0]])
    }
  }
  return res;
};
function peek(arr) {
  return arr[arr.length - 1]
}
// @lc code=end
// const nums = [1,3,-1,-3,5,3,6,7];
// const k = 3
// maxSlidingWindow(nums, 3)