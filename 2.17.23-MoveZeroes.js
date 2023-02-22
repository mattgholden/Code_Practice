// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++){
        if (nums[j] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    nums.fill(0, i);
}

//We use two pointers 'i' & 'j' to traverse the array.  When we encounter a non-zero element @ index 'j', we swap it with the element @ index 'i', and increment 'i'.
// Finally, we fill the remaining positions of the array w/ zeroes.