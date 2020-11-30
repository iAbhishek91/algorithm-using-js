const rotateArray = require("./10-rotate-array");


describe('positive test', () => {

  [

    {input: [1,2,3,4,5,6,7], k: 3, output: [5,6,7,1,2,3,4] },
    {input: [-1,-100,3,99], k: 2, output: [3,99,-1,-100] }

  ].forEach(e => {

    test(`test input: ${e.input} ${e.k} times; output ${e.output}`, () => {
      expect(rotateArray(e.input, e.k)).toStrictEqual(e.output);
    });

  });

});
