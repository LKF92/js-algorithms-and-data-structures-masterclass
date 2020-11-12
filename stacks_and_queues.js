class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Stack ==> Last In First Out (FIFO)
// In stacks, we 'push' at the beggining to reduce the time complexity to O(1).
// In a singly linked list, the push() method has to go through every node of the list to be able to pop the last one
// We avoid this unecessary time complexity by pushing at the beggining (aka unshift!)
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.length;
  }

  pop() {
    let popedNode = this.first;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popedNode.next;
    }
    this.length--;
    return popedNode;
  }
}

// Queue ==> First In First Out (FIFO)
class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    let removed = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removed;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
