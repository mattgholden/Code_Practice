// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

const searchMatrix = (matrix, target) => {
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const num = matrix[Math.floor(mid / n)][mid % n];

        if (num === target) {
            return true;
        } else if (num < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}
