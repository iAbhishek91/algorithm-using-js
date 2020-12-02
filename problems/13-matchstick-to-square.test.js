const makeSquare = require("./13-matchstick-to-square");


describe('positive test', () => {

  [

    {input: [1,1,1,1], output: true },
    {input: [1,1,2,2,2], output: true},
    {input: [1,1,2,2,3], output: false},
    {input: [3], output: false},
    {input: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], output: true},

  ].forEach(e => {

    test(`test input: ${e.input}; output ${e.output}`, () => {
      expect(makeSquare(e.input)).toBe(e.output);
    });

  });

});
