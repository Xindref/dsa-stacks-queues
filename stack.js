/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (this.first) {
      this.first.next = newNode;
    } else {
      this.last = newNode;
    }
    this.first = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const removedNode = this.first;
    let currentNode = this.last;
    if (this.first) {
      for (let i = 0; i < this.size - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.size--;
      return removedNode.val;
    } else {
      throw new Error('The stack is empty.');
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.first) {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else return false;
  }
}

module.exports = Stack;
