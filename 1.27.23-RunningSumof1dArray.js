// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

//We can use map to store the key-value pairs
const runningSum = (nums) => {
    nums.map((num,index) => {
        if(index != 0){
            return nums[index] = num + nums[index-1];
        }
    })
    return nums;
};

// class Solution:
//     def runningSum(self, nums: List[int]) -> List[int]:
//         solve=[0]*len(nums)
//         solve[0]=nums[0]
//         for i in range(1,len(nums)):
//             solve[i]=solve[i-1]+nums[i]
//         return solve
