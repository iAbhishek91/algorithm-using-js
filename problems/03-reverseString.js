function stringReverse(str) {
  const stringArr = str.split(''); // use [...str]
  const revArr = new Array();

  for(let i = 0; i < stringArr.length; i += 1) {
    revArr[i] = stringArr[stringArr.length - (i + 1)]
  }

  return revArr.join('');
}


module.exports = stringReverse;
