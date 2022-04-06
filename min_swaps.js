/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minMoves(arr) { 
    // Idea is to count 0s and keep track of if we prev swapped while iterating 
    // Also determine which side to put 1's and 0's by counting which half has more 1's (or 0's);
    let totalCount = 0;
    let zeroCount = 0;
    let prevSwapCount = 0;
    let targetNum = 1;
    
    
    // Count zeros and determine which half has more.
    for (let i = 0; i < arr.length; i++) {
        let num = -1;
        if (i < Math.floor(arr.length / 2)) num = 1;
        if (arr[i] === 0) zeroCount += num;
    }
    
    if (zeroCount > 0) targetNum = 0;
    zeroCount = 0;
    
    arr.forEach(n => {
        if (n === targetNum) {
            totalCount += zeroCount + prevSwapCount;
            prevSwapCount = zeroCount + prevSwapCount;
            zeroCount = 0;
        } else zeroCount ++;
    })
    
    /*
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1 
        => 12
        
    */
    return totalCount;
}