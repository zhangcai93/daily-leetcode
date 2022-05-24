/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dummyHead = new ListNode(0, head);
  let pre = dummyHead;

  while(pre.next) {
    let end = start = pre.next;
    for (let i = 0; i < k - 1; ++i) {
      end = end.next
      // 最后一组不足k个了， 直接返回最终结果
      if (!end) {
        return dummyHead.next;
      }
    }

    let tmp = end.next;
    // 断开链接
    end.next = null;
    // 旋转后的
    pre.next = reverseList(start);
    start.next = tmp;

    // 移动指针
    pre = start;
  }
  return dummyHead.next;
};

function reverseList(head) {
  let pre = null;
  let cur = head;

  while(cur) {
    let tmp = cur.next;
    cur.next = pre;

    pre = cur;
    cur = tmp;
  }

  return pre;
}
// @lc code=end

