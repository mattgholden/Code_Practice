// Given an m x n matrix, return all elements of the matrix in spiral order.

const spiralOrder = (matrix) =>{
    let result = [];
    if (matrix.length === 0){
        return result;
    }

    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length -1;

    while (top <= bottom && left <= right){
        //Traverse right
        for (let i = left; i <= right; i++){
            result.push(matrix[top][i]);
        }
        top++;

        //Traverse down
        for (let i = top; i <= bottom; i++){
            result.push(matrix[i][right]);
        }
        right--;
    }
}