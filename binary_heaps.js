class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length === 0) return max;
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let index = 0;
    let length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild > element) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if ((swap === null && rightChild > element) || (swap && rightChild > leftChild)) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
    console.log(this.values);
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.extractMax();
heap.extractMax();

// ---------- -------------- ---------- \\
// ---------- PRIORITY QUEUE ---------- \\
// ---------- -------------- ---------- \\
//  Implemented based on the binary heap, but this time we use a
// minBinary Heap so that the priority of 0 are the first one to be taken care of
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp(node);
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length === 0) return min;
    this.values[0] = end;
    this.sinkDown();
    return min;
  }
  sinkDown() {
    let index = 0;
    let length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild.priority < element.priority) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
    console.log(this.values);
  }
}
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gun shot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
console.log(ER);
ER.dequeue();
console.log(ER);
