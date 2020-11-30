const findDuplicate = require("./01-findDuplicateInArray");

describe('true scenarios', () => {
  [
    {testName: "2 number element", data: [1, 1]},
    {testName:"2 string element", data: ['a', 'a']},
    {testName:"multiple same element", data: ['a', 'a', 'a', 'a', 'a', 'a']},
    {testName:"multiple same element", data: ['a', 'b', 'c', 'd', 'e', 'e']},
    {testName:"2 boolean element", data: [true, true]},
  ].forEach(e => {
    test(e.testName, () => {
      expect(findDuplicate(e.data)).toBeTruthy();
    });
  });
});


describe('false scenarios', () => {
  [
    {testName: "empty array", data: []},
    {testName:"single element", data: ['a']},
    {testName:"multiple same element", data: ['a', 'b', 'c', 'd', 'e', 'f']},
    {testName:"2 boolean element", data: [true, false]},
  ].forEach(e => {
    test(e.testName, () => {
      expect(findDuplicate(e.data)).toBeFalsy();
    });
  });
});