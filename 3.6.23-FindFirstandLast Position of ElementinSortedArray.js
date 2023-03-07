// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

const searchRange = (nums, target) => {
    let left = 0;
 let right = nums.length - 1;
 let start = -1;
 
 // Find leftmost occurrence of target
 while (left <= right) {
     let mid = Math.floor((left + right) / 2);
     if (nums[mid] >= target) {
         right = mid - 1;
     } else {
         left = mid + 1;
     }
     if (nums[mid] === target) {
         start = mid;
     }
 }
 
 // Target not found
 if (start === -1) {
     return [-1, -1];
 }
 
 // Find rightmost occurrence of target
 left = start;
 right = nums.length - 1;
 let end = start;
 while (left <= right) {
     let mid = Math.floor((left + right) / 2);
     if (nums[mid] <= target) {
         left = mid + 1;
     } else {
         right = mid - 1;
     }
     if (nums[mid] === target) {
         end = mid;
     }
 }
 
 return [start, end];
};

// This algorithm has a time complexity of O(log n) since we perform two binary searches which take O(log n) time each.
