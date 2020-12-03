// given n will be non-negative

module.exports = function (n) {

  const tempBuffer = [1,1];

  for (let i = 2; i <= n; i += 1) {
    tempBuffer[i] = tempBuffer[i-1] + tempBuffer[i-2];
  }

  return tempBuffer[n - 1];
}
