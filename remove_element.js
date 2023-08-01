// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

const nums = [3,2,2,3]
const val = 3

// My logic is that I will have to iterate across the input array checking each value for
// the target value. I think it would be best to use a new array that will be added to as each
// value is checked in the input array per iteration. Once this is complete, the length of the
// result array will be returned to complete the question.

function removeElement (nums,val) {

    var resultArr = [];

    for(let i = 0; i < nums.length; i ++) {

        if(nums[i] !== val){
            resultArr.push(nums[i])
        }
    }

    return resultArr.length;
}

console.log(removeElement(nums,val));
