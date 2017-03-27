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
var mergeTwoLists = function (l1, l2) {
    // 儲存結果的ListNode
    var result = new ListNode(0);
    // 目前Node位置
    var c = result;

    while (l1 !== null && l2 !== null) {
        // l1,l2較小的數加入result
        if (l1.val > l2.val) {
            c.next = l2;
            l2 = l2.next;
        } else {
            c.next = l1;
            l1 = l1.next
        }
        c = c.next;
    }

    //將l1,l2剩下的Node加到result
    if (l1 !== null) {
        c.next = l1;
    }

    if (l2 !== null) {
        c.next = l2;
    }
    return result.next
};