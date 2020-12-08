/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = require("./07-two-sum");


describe('positive test', () => {

  [

    {arr1: [2,7,11,15], target: 9, expected: [0, 1]},
    {arr1: [3,2,4], target: 6, expected: [1, 2]},
    {arr1: [3,3], target: 6, expected: [0, 1]},
    {arr1: [2,3,4], target: 7, expected: [1, 2]},
    {arr1: [-1,-2,-3,-4,-5], target: -8, expected: [2, 4]},

  ].forEach((e, i) => {

    test(`test-${i+1}`, () => {
      expect(twoSum(e.arr1, e.target)).toStrictEqual(e.expected);
    });

  });

});
