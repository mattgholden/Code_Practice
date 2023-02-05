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