const bubbleSort = require("./04-bubbleSort");



describe('positive scenarios', () => {

  [
    {testName: "null array", arr1: [], arr2: [], expected: []},
    {testName: "one same element", arr1: [1], arr2: [1], expected: [1, 1]},
    {testName: "one element but different in two arrays", arr1: [1], arr2: [2], expected: [1, 2]},
    {testName: "generic two arrays", arr1: [56, 1, 23,45,56, 99], arr2: [99, 0,9,67], expected: [0,1,9,23,45,56,56,67,99,99]}

  ].forEach(e => {
    
    test(e.testName, () => {

      expect(bubbleSort(e.arr1, e.arr2)).toStrictEqual(e.expected);

    });
  });
});