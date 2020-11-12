class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.prev.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let removedNode = this.tail;
    let newTail = removedNode.prev;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      removedNode.prev = null;
      this.tail = newTail;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      let oldHead = this.head;
      this.head = newHead;
      newHead.next = oldHead;
      oldHead.prev = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index <= Math.floor(this.length / 2)) {
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter > index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) this.unshift(val);
    if (index === this.length - 1) this.push(val);

    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    (previousNode.next = newNode), (newNode.prev = previousNode);
    (nextNode.prev = newNode), (newNode.next = nextNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();

    let removed = this.get(index);
    let previousNode = removed.prev;
    let nextNode = removed.next;

    (previousNode.next = nextNode), (nextNode.prev = previousNode);
    (removed.prev = null), (removedNode.next = null);

    this.length--;
    return true;
  }
}
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.unshift(100);
console.log(list.get(3));
// console.log(list);
