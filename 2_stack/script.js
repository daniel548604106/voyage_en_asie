class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp.value;
    }
  }

  size() {
    return this.length;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.size();

console.log(myStack);
