/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2, overflow) {
    overflow = overflow ? overflow : 0;
    if (l1 === null && l2 === null && !overflow) {
        return null;
    }
    let val = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + overflow);
    let list = new ListNode(val % 10);
    list.next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, parseInt(val / 10));
    return list;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(2);
l2.next = new ListNode(6);
l2.next.next = new ListNode(3);

var result = addTwoNumbers(l1, l2);
console.log(result)