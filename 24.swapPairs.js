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
 var swapPairs = function(head) {
    let dummyHead = new ListNode(0, head);
    let pre = dummyHead;

    while(pre.next && pre.next.next) {
        let n1 = pre.next;
        let n2 = pre.next.next;

        pre.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        
        pre = n1;
    }
    return dummyHead.next;
};
