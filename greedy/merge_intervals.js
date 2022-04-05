
/*
 * Complete the 'getMergedIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function getMergedIntervals(intervals) {
    let res = [];
    // Write your code here
    intervals.sort((a, b) => a[0] - b[0]);
    
    res.push({
        start : intervals[0][0],
        end : intervals[0][1],
    })
    
    for (let i = 1; i < intervals.length; i++) {
        let currInter = {
            start : intervals[i][0],
            end : intervals[i][1],
        }    
        
        let prevInter = res[res.length - 1];
        
        if (currInter.start > prevInter.end) {
            res.push(currInter);
            continue;
        }
        
        if (currInter.end >= prevInter.end){
            prevInter.end = currInter.end;
        }
    }
    
    let arr = [];
    res.forEach(time => {
        arr.push([time.start, time.end]);
    })
    
    return arr;
}