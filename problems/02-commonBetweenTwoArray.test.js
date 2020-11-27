const commonBetweenTwoArray = require("./02-commonBetweenTwoArray");



describe('true', () => {
  [

    {testName: "1 element in common", arr1: [1, 2], arr2: [2]},
    {testName: "all element in common", arr1: [1, 2], arr2: [1, 2]},
    {testName: "one element array", arr1: [1], arr2: [1]},
  
  ].forEach(e => {

    test(e.testName, () => {
      expect(commonBetweenTwoArray(e.arr1, e.arr2)).toBeTruthy();
    });
  
  });
});



describe('false', () => {
  [

    {testName: "first array is null", arr1: [], arr2: [1, 2]},
    {testName: "second array is null", arr1: [1, 2], arr2: []},
    {testName: "both array is null", arr1: [], arr2: []},
  
  ].forEach(e => {

    test(e.testName, () => {
      expect(commonBetweenTwoArray(e.arr1, e.arr2)).toBeFalsy();
    });
  
  });
});