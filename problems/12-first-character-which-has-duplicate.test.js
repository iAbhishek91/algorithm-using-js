const firstDuplicate = require("./12-first-character-which-has-duplicate");


describe('positive test', () => {

  [

    {input: [1,2,3,3,4,1], output: 1 },
    {input: [1,2,3,3,4], output: 3},
    {input: [1,2,3], output: -1},

  ].forEach(e => {

    test(`test input: ${e.input}; output ${e.output}`, () => {
      expect(firstDuplicate(e.input)).toEqual(e.output);
    });

  });

});
