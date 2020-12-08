/*
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

// brute force
// using recursion
function bruteForce(str) {

  const strArr = str.split('');

  return recursion(strArr);

  function recursion (strArr, currentResult = '', currentIndex = 0) {
    let result = currentResult;
    const temp = [];
  
    for(let i = currentIndex; i < strArr.length ; i += 1) { //O(n)
      temp.push(strArr[i]);
      
      const buffer = [...temp];
  
      if (
        temp.toString() === buffer.reverse().toString()
        && temp.length > result.length
      ) result = temp.join('');
    }
  
    // stop condition
    // if length of result is > left over array
    // or entire array is already scanned
    if (
      result.length > strArr.length - (currentIndex + 1)
      || currentIndex >= strArr.length - 1x
    ) return result;
  
    return recursion(strArr, result, currentIndex += 1);
  }
}



console.log(bruteForce("bbbbbbbbbaaaaaaaaaa"));
console.log(bruteForce("babad"));
console.log(bruteForce("aaaamadamaaaaaa"));
console.log(bruteForce("cbbd"));
console.log(bruteForce("a"));
console.log(bruteForce("ajnsdfuu"));
console.log(bruteForce("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))