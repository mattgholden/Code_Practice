// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

const longestPalindrome = (s) => {
    const map = new Map();
    for (let c of s) {
      map.set(c, map.get(c) + 1 || 1);
    }
  
    let odds = 0;
    map.forEach((count) => (odds += count % 2));
  
    return s.length - odds + !!odds;
  };