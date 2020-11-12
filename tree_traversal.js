class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
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
  
  class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS(){
      let data = []
      let queue = new Queue()
      queue.enqueue(this.root)
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
  