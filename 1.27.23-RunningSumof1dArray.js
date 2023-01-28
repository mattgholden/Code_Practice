// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (nums) => {
    nums.map((num,index) => {
        if(index != 0){
            return nums[index] = num + nums[index-1];
        }
    })
    return nums;
};
