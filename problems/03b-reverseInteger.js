function reverseNumber(num) {
  let isNegative = false;

  if (num < 0) {
    isNegative = true;
    num = num * -1;
  }

  let reverse = num % 10;
  num = Math.floor(num / 10);

  while(num > 0) {
    reverse *= 10;
    reverse += (num % 10);
    num = Math.floor(num / 10);
    console.log(reverse, num)
  }

  if (isNegative) reverse *= -1;

  if (reverse < -2147483648 || reverse > 2147483647) return 0;

  return reverse;
}



console.log(reverseNumber(-123));