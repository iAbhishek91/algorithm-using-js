function stringReverse(str) {
  const stringArr = str.split(''); // use [...str]
  const revArr = new Array();

  for(let i = 0; i < stringArr.length; i += 1) {
    revArr[i] = stringArr[stringArr.length - (i + 1)]
  }

  return revArr.join('');
}


function arrayReverseInPlace(str) {
  let length = str.length - 1;
  let start = 0;
  
  while(start < length) {
    let temp = str[start];
    str[start] = str[length];
    str[length] = temp;
    start++;
    length--;
  }

  return str;
}

console.log(arrayReverseInPlace(['a','b','h','i','s','h','e','k']));

module.exports = stringReverse;
