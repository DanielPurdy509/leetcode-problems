// Given an array of integers nums and an integer target
// Returns indices of the two numbers such that they add up to the target.
// Each input has exactly one solution
// Cannot use the same element twice

const nums = [2,7,11,15];
const target = 13;

function twoSum (nums,target) {
    let hashmap = {};
    for(let i = 0; i < nums.length; i ++) {
        let diff = target - nums[i];
        if(hashmap[diff] != undefined){
            return ([hashmap[diff],i]);
        }
        else{
            hashmap[nums[i]] = i;
        }
    }
}

console.log(twoSum(nums,target));

/*
Uses a hashmap to keep track of each value/index pair as they are encountered.
A variable stores the difference of the current index value and the target input upon each iteration.

Given that it is guaranteed that a sum pair is present in the input array, the difference indicates
what other number is required to create a viable sum pair for the target number.

twoSum checks to see if the difference is already logged in the hashmap.
IE: if the other half to the sum pair has already been interated over previously and logged in the hashmap.
If it is, twoSum returns the current index ("i") and the index of its sum pair identified by the difference
and stored in the hashmap ("hashmap[diff]")

Otherwise, twoSum logs the current iteration into the hashmap as a value/index pair.

The end result is eventually finding the guaranteed sum pair while only requiring to iterate over the
input array once.
*/