/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 142. 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 链表长度分3段
 * x: 链表头节点到环入口节点
 * y: 环入口节点到相遇节点
 * z: 相遇节点到环入口节点（y+z=环长度）
 * slow：x + y
 * fast：x + n(y + z) + y
 * slow * 2 = fast
 * => x = (n - 1)(y + z) + z
 * => n=1时有： x = z
 * 两个指针：p从头节点出发，q从相遇节点出发，p&q相遇节点即为环的入口节点
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
  let fast = slow = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) { // 相遇节点
      fast = head; // fast回到头节点

      // fast和slow一起走， 再次相遇即为环入口
      while(fast !== slow) {
        fast = fast.next;
        slow = slow.next
      }
      return slow
    }
  }
  return null
};
// @lc code=end

