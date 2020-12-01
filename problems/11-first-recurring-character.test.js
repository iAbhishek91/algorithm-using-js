const firstRecurring = require("./11-first-recurring-character");


describe('positive test', () => {

  [

    {input: [1,2,3,4,5,6,7,4], output: 4 },
    {input: [-1,99,-100,3,99], output: 99 },
    {input: [-1,99,-100,3,9], output: -1}

  ].forEach(e => {

    test(`test input: ${e.input}; output ${e.output}`, () => {
      expect(firstRecurring(e.input)).toEqual(e.output);
    });

  });

});
