/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// size为k的小顶堆 n*logk (性能好， 但需要建立堆)
// 长度为k的排序数组 n*k*logk
// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  nums.sort((a, b) => b - a); // 降序
  this.kArr = nums.slice(0, k);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const idx = findInsertIdx(this.kArr, val)
  // 插入1个
  this.kArr.splice(idx, 0, val)
  // 把尾部移除一个
  if (this.kArr.length > this.k) {
    this.kArr.pop()
  }
  return this.kArr[this.k - 1]
};


// arr是降序数组
function findInsertIdx(arr, val) {
  let i = 0;
  let j = arr.length - 1;
  while(i <= j) {
    const midIdx = Math.floor((i + j)/2);
    const mid = arr[midIdx];
    if (mid < val) {
      j = midIdx - 1;
    } else if (mid > val) {
      i = midIdx + 1;
    } else {
      return midIdx;
    }
  }
  return i;
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
// [[1,[]],[-3],[-2],[-4],[0],[4]]
// const kthLargest = new KthLargest(1,[]);
// const param = [[-3],[-2],[-4],[0],[4]]
// param.forEach(val => {
//   kthLargest.add(val[0])
// })

// console.log(findInsertIdx([ 8, 5, 5, 4, 2, 3 ], 10))