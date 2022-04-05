/*
 * Complete the 'getGroupedAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 */

function getGroupedAnagrams(words) {
    // Write your code here
    let count = 0;
    
    // Try sorting words by increasing length
    // Create a hash of where keys are letters and values are char freq
    // While iterating over words empty the hash when word[i] is different length than word[i-1]
    let hash = {};
    let currMin = 0;
    for (let i = 0; i < word.length; i++) {
        let prevLength = words[i - 1].length || 0;
        let currWord = words[i];
        
        if (prevLength !== currWord.length) {
            count += currMin;
            hash = {};
        }
        
        
    }

    return count;
}
