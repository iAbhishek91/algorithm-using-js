# tree

hierarchical data structure unlike array, or hashmaps.

## terms

- **level**: starts with 0.
- **height**: stars with 1.

## types

- binary tree:
  - each nodes can have only, 0, 1 or 2 nodes.
  - **full binary tree** 0 or two are possible
  - **perfect binary tree** full binary tree with leaves at same level.
    - they are efficient, and desirable.
      - *no of leaf node doubles on each level*,
      - *no of leaf nodes = all other nodes + 1*,
      - *no of node is at each level= 2^level*,
      - *total nodes =2^height - 1*,
  - **binary search tree**:
    - binary tree
    - right child node is greater than parent node.
    - left child node is less than the parent node.
    - **unbalanced binary tree** : O(n) performance,
    - **balanced binary tree** : O(log n), (we always desire to have balance)
      - **AVL tree**:
      - **red/black tree**: also balances the tree on insertion and deletion operation.
  - **binary heap**:
    - We are *NOT referring to memory heap*. memory heap and heap data structure are completely different.
    - Used in *priority queue*, comparative analysis (all people more than age 60), data storage.
    - Binary tree takes *up least amount of memory possible* as Insertion and deletion is done in a way that tree is always balanced. Hence there is *NO concept of balanced or unbalanced Binary heap*.
    - **max binary heap tree**: root is the max, no relation between left and right child like BST
    - **min binary heap tree**: root is the min, no relation between left and right child like BST
    - **Priority queue**: they are tree which are binary heap tree arranged with priority.
      - root node always have the highest priority
      - all the child nodes have less priority and they are inserted from left to right.
      - fast insert | priority | flexible size | slow lookup compared to binary search tree.
      - best usecase is to find min or max from a algorithm.
  - **trie** its a specialized tree used for searching.
    - they are *NOT binary tree*.
    - generally have a empty root node.
    - they solve problems of *strings*. do word "war" exists

## complexity

**balanced binary tree**:

- lookup - O(log n), better than O(n)
- insert - O(log n)
- delete - O(log n)

log 100 = 2 (base 10 by default)
10^2 = 100

**unbalanced binary tree**:

- lookup - O(n)
- insert - O(n)
- delete - O(n)

**binary heap tree**:

- lookup - O(n) // as they are not as ordered as BST
- insert - O(log n)
- delete - O(log n)
