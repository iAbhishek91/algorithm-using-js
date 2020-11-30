const subArray = require('./09-max-subarray');



describe('positive scenarios', () => {

  [

    { input: [-2,1,-3,4,-1,2,1,-5,4], output: 6 },
    { input: [-1], output: -1 },
    { input: [0], output: 0 },
    { input: [-2,-1], output: -1},
    { input: [1], output: 1 },
    { input: [-2147483647], output: -2147483647 },

  ].forEach(element => {
    
    test(`test output should be ${element.output}, for input ${element.input}`, () => {
      expect(subArray(element.input)).toStrictEqual(element.output);
    });

  });

});
