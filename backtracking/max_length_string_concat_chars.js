/*
Maximum Length of a Concatenated String with Unique Characters

https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

Return the maximum possible length of s.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
Explanation: The only string in arr has all 26 characters.
 

Constraints:

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] contains only lowercase English letters.
*/

var maxLength = function(arr) {
    // Brute force this with backtracking because of favorable constraints.
    // Max of 16 words and max word length is 26 letters
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (!isUniq(word, '')) continue;
        max = Math.max(maxUniq(arr, i, '', max), max);
    }
    
    return max;
};

function maxUniq(arr, i, word, max) {
    max = Math.max(max, word.length);
    if (i >= arr.length) return max;
    
    for (let j = i; j < arr.length; j++) {
        if (isUniq(word, arr[j])){
            max = Math.max(maxUniq(arr, j + 1, word + arr[j], max), max);      
        }
    }
    
    return max;
}

function isUniq(a, b) {
    let alphabet = [];
    
    for (let i = 0; ; i++) {
        if (i >= a.length && i >= b.length) break;
        let aCharCode = '';
        let bCharCode = '';
        
        if (a[i]) {
            aCharCode = a.charCodeAt(i);
            if (alphabet[aCharCode]) return false;
            else alphabet[aCharCode] = 1;
        }
        
        if (b[i]) {
            bCharCode = b.charCodeAt(i);
            if (alphabet[bCharCode]) return false;
            else alphabet[bCharCode] = 1;
        } 
    }
    
    return true;
}