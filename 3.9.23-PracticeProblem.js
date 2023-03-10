// Write a function that takes in a list or an array of numbers. The function should return the sum of any numbers from the list that are either greater than 10 or less than 5

// create a variable called 'sum'.

const sumOfNumOverTenOrUnderFive = (nums) =>{
    let sum = 0;

// We will need to start the variable at zero and iterate through each # in the given array. We can use a for loop for this.
    for (let i = 0; i < nums.length; i++){;
// With an if statement we will check whether each element is greater than 10 or less than 5.
        if(nums[i] > 10 || nums[i] < 5){
            sum += nums[i];
        }
    }
// If the element meets the above criteria the function adds the element's value to the a 'sum' variable.
    
//The function returns the value of 'sum'. This will be the sum of all the elements in the array that are either > 10 or < 5.
    return sum;
}

// Time complexity should be O(n).  n = the # of elements in the input array.  The time taken to execute the function scales linearly w/ the size of the input array.