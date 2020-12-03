const sumAvailable = require('./18-sum-avaialble-two-array');

// n should be 1 to n.
describe('test fibonacci', () => {

  [

    {input1: [1], input2: [1], target: 2, output: true},
    {input1: [1], input2: [0], target: 2, output: false},
    {input1: [-1, 3, 8, 2, 9, 5], input2: [4, 1, 2, 10, 5, 20], target: 25, output: true},

  ].forEach(e => {
    test(`test ${e.input1} & ${e.input2} have ${e.target} is equivalent to ${e.output}`, () => {
      expect(sumAvailable(e.input1, e.input2, e.target)).toBe(e.output);
    });
  });

});
