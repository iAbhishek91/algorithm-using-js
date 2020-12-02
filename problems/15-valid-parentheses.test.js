const validParentheses = require('./15-valid-parentheses');



describe('valid parentheses test', () => {

  [
    {input: "((((((((((((()))))))))))))", output: true},
    {input: "()[]{{[()]}}", output: true},
    {input: "()[]{{[()}})", output: false},
    {input: "", output: true},
    {input: "({", output: false},
    {input: "]", output: false},
    {input: "[a]", output: true},
    {input: "[a]", output: true},
  ].forEach(e => {
    
    test(`test ${e.input} is ${e.output?'valid':'invalid'}`, () => {
      expect(validParentheses(e.input)).toBe(e.output);
    });

  });

});
