'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// [2,2,1,1,3] 
// k = 3
// min = 4

/*
 * Complete the 'findMinimumLengthSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function findMinimumLengthSubarray(arr, k) {
    // Write your code here
    // Sliding windows/two pointers
    
    let distinct = 0;
    let freq = {};
    let min = Infinity;
    for (let right = 0, left = 0; right < arr.length; right++) {
        let rightNum = arr[right];
        
        if (rightNum in freq) {
            if (distinct >= k) min = Math.min(min, right - left);
            // left = freq[rightNum] + 1;
            // freq[rightNum] = right;
        } else {
            distinct++;
        }
        freq[rightNum] = right;
    }
    
    if (distinct < k) return -1;
    // k = 2
    // 1122 
    // => [1,2] => 2
    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = findMinimumLengthSubarray(arr, k);

    ws.write(result + '\n');

    ws.end();
}
