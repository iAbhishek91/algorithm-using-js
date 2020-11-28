function longestWordInString(string) {

  const arrayOfWords = string.split(" ");

  let maxSize = 0;
  let lengthiestWord = '';

  arrayOfWords.forEach(e => {

    if (e.length > maxSize) {
      maxSize = e.length;
      lengthiestWord = e;
    }

  });

  return lengthiestWord;
}

module.exports = longestWordInString;
