// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// var fizzBuzz = function(n) {
//     let answer = [];
//     while (n){
//         if(!(n%15)){
//             answer.unshift('FizzBuzz');
//         } else if(!(n%3)){
//             answer.unshift('Fizz');
//         } else if(!(n%5)){
//             answer.unshift('Buzz');
//         } else {
//             answer.unshift('' + n);
//         }
//         n--;
//     }
//     return answer;
// };

/////More understandable solution///
const fizzBuzz = (n) => {
    // create a variable to store an array
    let answer = [];
    //for loop starting at index 1, if i is less than or equal to n we continue.
    for(let i = 1; i <= n; i++){
        let currentString = '';
        // console.log(currentString)
        //if the remainder of i divided by 3 is o then create the string 'Fizz'
        if (i % 3 === 0) currentString += 'Fizz';
        //if the remainder of i divided by 5 is 0 then create the string 'Buzz'
        if(i % 5 === 0) currentString += 'Buzz';
        //if the current string is not a multiple of 3 or 5 (empty string) then return the value of i
        if (currentString === '') currentString += i;

        answer.push(currentString);
    }
    return answer;
}