// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

//Can we replace the letters in S with T?
//Check each letter in S and T
//If they have the same amount 
//Then we check if any repeat in S
//If they repeat in S we check if they do in T
//The same letter cannot replace a different letter
//Ex. Foo & Off are Isomet. but not Bar
//The O's would replace the F's
//If the same letter is replacing a different letter
//It is false
//If the same letter is replacing the same letter
//And the quantity matches we return true

const isIsomorphic = (s, t) => {
    //hold key-value pairs with Map
    let charMap = new Map();
    //Store the values
    let values = new Set();
    //loop over the strings
    for(let i=0; i < s.length; i++){
        //if the character Map object has 
        if(charMap.has(s[i])){
            //take the character locations of s and t and see if they are not matching
            if(charMap.get(s[i])!== t[i]){
                return false;
            } 
        } else{
            //if the set has the same character as t return false 
            if(values.has(t[i])){
                return false;
            } 
            //update the characters of s & t
            charMap.set(s[i], t[i]) 
            //add the t characters
            values.add(t[i])
        }
    }
    return true;
};