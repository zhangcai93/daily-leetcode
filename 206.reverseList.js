/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let pre = null;
    let cur = head;

    while(cur) {
        let q = cur.next;
        cur.next = pre;
        
        // 移动指针
        pre = cur;
        cur = q;
    }

    return pre;
};
