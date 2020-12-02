# Stack and Queue

no random access.

Stack : LIFO
Queue : FIFO

> Priority queue are implemented using tree and they do not respect FIFO.

## Complexity

**Stack**:

- lookup: O(n)
- pop: O(1)
- push: O(1)
- peek: O(1) // only look at the first element

**Queue**:

- lookup: O(n)
- enqueue: O(1)
- dequeue: O(1)
- peek: O(1)

## Implement

Queue and Stack can be create using **array** or **linked list**.

> Queue is worst with array, as the first element needs to come out on pop, hence its O(n), however for stack array or linked list are ok as we just need to get the last element.
