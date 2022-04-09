/*
Shortest Subarray with Sum at Least K 

https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/

Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

A subarray is a contiguous part of an array.

 
Example 1:

Input: nums = [1], k = 1
Output: 1
Example 2:

Input: nums = [1,2], k = 4
Output: -1
Example 3:

Input: nums = [2,-1,2], k = 3
Output: 3
 

Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105
1 <= k <= 109
*/

var shortestSubarray = function(nums, k) {
    let min = Infinity;
    
    
    /* 
        [2, -1, 1, 2]
        [0, 2, 1, 2, 4]
        k = 3
    */     
    let pSum = [0];
    let dQ = [];
    
    nums.forEach(n => {
        let sum = pSum[pSum.length - 1] + n;
        pSum.push(sum);   
    })
    
    for (let i = 0; i <= nums.length; i++) {
        // console.log(dQ);
        while (dQ.length && pSum[i] - pSum[dQ[0]] >= k) {
            min = Math.min(min, i - dQ.shift());
        }
        
        while (dQ.length && pSum[i] <= pSum[dQ[dQ.length - 1]]) {
            dQ.pop();
        }
        
        dQ.push(i);
    }
    
    return (min === Infinity)? -1 : min;
};
