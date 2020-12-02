/*
Problem implement queue using stack

solution: using two stack
- we are implementing stack using array hence we can use only pop and push method
- push is always done in stack1
- pop is always done from stack2
*/
class Queue {
  constructor(value) {
    this.stack1 = [];
    this.stack2 = [];
    this.stack1.push(value);
  }

  push(value) {
    this.stack1.push(value);
  }

  pop() {
    if(this.stack2.length === 0) {
      while(this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop()); // this inserts the element in reverse order
      }
    }

    return this.stack2.pop();
  }

  peek() {
    if(this.stack2.length === 0) {
      while(this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop()); // this inserts the element in reverse order
      }
    }

    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return ((this.stack1.length === 0) && (this.stack2.length === 0));
  }
}


module.exports = Queue;
