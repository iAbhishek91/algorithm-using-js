/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const moveZero = require("./08-move-zero");


describe('positive tets', () => {

  [

    {input: [0,1,0,3,12], output: [1,3,12,0,0]},
    {input: [0,0,0,0], output: [0,0,0,0]},
    {input: [0,1,0,0,1,0], output: [1,1,0,0,0,0]},

  ].forEach((e,i) => {

    test(`test-${i+1}`, () => {
      expect(moveZero(e.input)).toStrictEqual(e.output)
    });

  });

});