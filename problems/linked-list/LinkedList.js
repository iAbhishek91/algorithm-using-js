class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    }
    this.head = newNode;
    this.length += 1;
    return this;
  }

  insert(value, index) {

    if (index > this.length || index < 0) throw new Error("Index out of bound");

    if (index === 0) {
      this.prepend(value); // insert at head
      return;
    }
    if (index === this.length) {
      this.append(value); // insert at tail
      return;
    }

    // 1 to length - 1
    const newNode = { value, next: null };
    let vertex = this.head;

    for(let i = 0; i < this.length ; i += 1) {
      if(index - 1 === i) {
        newNode.next = vertex.next;
        vertex.next = newNode;
        this.length += 1;
        return;
      }

      vertex = vertex.next;
    }
  }

  delete(index) {

    
  }

}

// const myLinkedList = new LinkedList(1);
//   myLinkedList.insert(2, 1);
//   myLinkedList.insert(3, 1);
//   console.log(JSON.stringify(myLinkedList, undefined, " "));
//   console.log("------------");
//   myLinkedList.delete(1);
//   console.log(JSON.stringify(myLinkedList, undefined, " "));
//   console.log("------------");
//   myLinkedList.delete(1);
//   myLinkedList.delete(0);

//   console.log(JSON.stringify(myLinkedList, undefined, " "));

export default LinkedList;
