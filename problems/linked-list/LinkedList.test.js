import LinkedList from './LinkedList';



describe('base Element', () =>{
  const myLinkedList = new LinkedList(1);

  test('head of base element', () => {
    const head = {
      value: 1,
      next: null,
    }
    expect(myLinkedList.head).toStrictEqual(head);
  });

  test('tail of base element', () => {
    const tail = {
      value: 1,
      next: null,
    }
    expect(myLinkedList.tail).toStrictEqual(tail);
  });

  test('length of base element', () => {
    expect(myLinkedList.length).toBe(1);
  });
});




describe('append', () =>{
  const myLinkedList = new LinkedList(1);
  myLinkedList.append(2);
  myLinkedList.append(3);

  test('head of linked list', () => {
    const head = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null
        },
      },
    }
    expect(myLinkedList.head).toStrictEqual(head);
  });

  test('tail of base element', () => {
    const tail = {
      value: 3,
      next: null,
    }
    expect(myLinkedList.tail).toStrictEqual(tail);
  });

  test('length of base element', () => {
    expect(myLinkedList.length).toBe(3);
  });
});





describe('prepend', () => {
  const myLinkedList = new LinkedList(1);
  myLinkedList.prepend(2);
  myLinkedList.prepend(3);

  test('head of base element', () => {
    const head = {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        },
      },
    }
    expect(myLinkedList.head).toStrictEqual(head);
  });

  test('tail of base element', () => {
    const tail = {
      value: 1,
      next: null,
    }
    expect(myLinkedList.tail).toStrictEqual(tail);
  });

  test('length of base element', () => {
    expect(myLinkedList.length).toBe(3);
  });
});



describe('insert', () => {
  const myLinkedList = new LinkedList(1);
  myLinkedList.insert(2, 1);
  myLinkedList.insert(3, 1);
  myLinkedList.insert(0, 0);
  myLinkedList.insert(2.5, 2);

  const expectedLinkedList = {
    value: 0,
    next: {
      value: 1,
      next: {
        value: 2.5,
        next: {
          value: 3,
          next: {
            value: 2,
            next: null
          }
        }
      }
    },
  }

  test('head of base element', () => {
    expect(myLinkedList.head).toStrictEqual(expectedLinkedList);
  });

  test('tail of base element', () => {
    const tail = {
      value: 2,
      next: null,
    }
    expect(myLinkedList.tail).toStrictEqual(tail);
  });

  test('length of base element', () => {
    expect(myLinkedList.length).toBe(5);
  });
});
