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
// class Solution:
    // def pivotIndex(self, nums: List[int]) -> int;
    // total_on_left, total_on_right = 0, sum(nums)
    // for idx, current_total in enumerate(nums):

    //      total_on_right -= current_total
    //      if total_on_left == total_on_right: 
    //          return idx
    //      total_on_left += current_total
    // return -1
