const { addTwoNumbers, addTwoNumbers2} = require('./23-add-two-numbers');


describe('test add two number', () => {

  [

    { arr1: [2,4,3], arr2: [5,6,4], output: [7,0,8] },
    { arr1: [0], arr2: [0], output: [0] },
    { arr1: [9,9,9,9,9,9,9], arr2: [9,9,9,9], output: [8,9,9,9,0,0,0,1] },

  ].forEach(e => {

    test(`test addTwoNumbers: ${e.arr1} + ${e.arr2} should be equal to ${e.output}`, () => {
      expect(addTwoNumbers(e.arr1, e.arr2)).toStrictEqual(e.output);
    });

    test(`test addTwoNumbers2: ${e.arr1} + ${e.arr2} should be equal to ${e.output}`, () => {
      expect(addTwoNumbers2(e.arr1, e.arr2)).toStrictEqual(e.output);
    });

  });

});