const longestWordInString = require("./06-longestWordInString");


describe('positive scenario', () => {

  [

    {data: "Abhishek loves to code", expected: "Abhishek" },
    {data: "he loves to read technical books", expected: "technical" },
    {data: "", expected: ""},

  ].forEach((e,i) => {

    test(`test-${i}`,() => {

      expect(longestWordInString(e.data)).toBe(e.expected);

    });

  });

});