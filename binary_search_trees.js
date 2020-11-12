class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
    let queue = []
    let currentNode = this.root
    queue.push(this.root)

    while(queue.length){
      currentNode = queue.shift()
      data.push(currentNode.value)
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
    }
    return data
}

  DFS_preOrder(){
  let visited =[]
  const traverse = node => {
    visited.push(node.value)
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
  }
  traverse(this.root)
  return visited
  }

  // We go bottom-up : the root is the last node being added.
  // Same as preOrder except that we traverse the whole tree before adding the node 
  // to the array of visited node.  
  DFS_postOrder(){
  let visited =[]
  const traverse = node => {
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
    visited.push(node.value)
  }
  traverse(this.root)
  return visited  
  }
  
  // We visit and add the node in a sorted way
  // Again, same as before except for a single line that will change 
  // how we insert the node we visited
  DFS_inOrder(){
  let visited =[]
  const traverse = node => {
    if(node.left) traverse(node.left)
    visited.push(node.value)
    if(node.right) traverse(node.right)
  }
  traverse(this.root)
  return visited
  }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
// console.log(tree);
// console.log(tree.find(3));
// console.log(tree.find(5));

// console.log(tree.BFS());
console.log(tree.DFS_preOrder());
console.log(tree.DFS_postOrder());
console.log(tree.DFS_inOrder());
