// Simplify the problem
//Given a list of numbers we need to find which two are equal to our target value.

//For every number if the
//If the difference of the current number and target is found in the list then that is //our value needed.


//Beginning to review the problem the initial equation I think of is (z = x + y), where 
// our target is (z), our current element is (x), and our other element is (y).  But after more thought it seems like (y = z - x) may work more efficiently. 

//I know must traverse through each array multiple times so I choose to use a for loop.
//Whilst doing so I am checking to see if the current element I am on has been reviewed //before.
//If the element has been, then we return the index


var twoSum = function(nums, target){
    //Need a way to store the answer so create an array.
    ans = [];
    //Use Map to store the difference and the index.
    indexMap = new Map();
    //For loop/traverse through all of the elements in the array
    for(let i = 0; i < nums.length; i++){
        //the difference = the target number subtracted from the current number 
        //we are checking in the array
        let diff = target - nums[i];
        //if the difference exists...
        if(indexMap.has(diff)){
            ans[0] = i;
            ans[1] = indexMap.get(diff);
            //stop the loop from continuing
            break;
        //otherwise continue the check
        } else {
            indexMap.set(nums[i], i)
        }
    }
    return ans;  
}

// class Solution:
// def twoSum(self, nums: List[int], target: int) -> List[int]:
// index1 = 0
// while True:
//     for index2 in range(index1+1,len(nums)):
//         if nums[index1] == target - nums[index2]:
//             return [index1,index2]       
//     index1+=1