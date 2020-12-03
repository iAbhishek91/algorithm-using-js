const fibonacci = require('./17-fibonacci');

// n should be 1 to n.
describe('test fibonacci', () => {

  [

    {input: 1, output: 1},
    {input: 2, output: 1},
    {input: 4, output: 3},
    {input: 5, output: 5},
    {input: 7, output: 13},
    {input: 110, output: 4.356677625885486e+22},

  ].forEach(e => {
    test(`test ${e.input} is equivalent to ${e.output}`, () => {
      expect(fibonacci(e.input)).toBe(e.output);
    });
  });

});