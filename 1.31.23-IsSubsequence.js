// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Comments//
 //Is the s string a subsequence of t string or not?
 //True or False
 //We want to find characters that are in the same position
 //loop through to compare the index positions, create an array.
 //indexOf

const isSubsequence = (s, t) => {
    // let indexS = [];
    // let indexT = [];
    if(s.length > t.length){
        return false
    }
    for (let i=0; i< s.length; i++){
        if (!t.includes(s[i])){
            return false
        }else{
            t = t.slice(t.indexOf(s[i])+1)
        }
    // compare if s == t
    }
    return true;
};
 