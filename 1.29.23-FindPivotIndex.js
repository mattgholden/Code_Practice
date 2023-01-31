// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

function Accumulation(arr){
    return arr.reduce((a,b)=>a+b);  
}

var pivotIndex = function(nums) {
    // Balance
    let totalOnLeft = 0;
    let totalOnRight = Accumulation(nums);
    
    for(let i = 0; i < nums.length; i ++){
        let currentTotal = nums [i];
        totalOnRight -= currentTotal;
        if(totalOnLeft == totalOnRight){
            return i;
        }
        totalOnLeft += currentTotal
    }
    return -1;
};
 
////Python

