// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.

const  n = [1,1,2];

var removeDuplicates = function(n) {
    
    let j = 0;
    
    for(let i = 0; i < n.length; i++) {
        
        if(n[i] !== n[i+1]) {    
            n[j++] = n[i];
        }
    };
    
    return j;
};

console.log(removeDuplicates(n));

// This attempt I had to look up a solution. I will reattempt after a few days and attempt again on my own.