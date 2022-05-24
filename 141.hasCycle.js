/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 141. 判断链表中是否有环。返回true/false
// 快慢指针是否相遇
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let slow = fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        } 
    }

    return false;
};

// 142. 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
};
