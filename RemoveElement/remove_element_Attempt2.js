const nums = [3,2,3,3];
const val = 3;

var removeElement = function (nums,val) {

    let index = 0;

    for (let i = 0; i < nums.length ; i++){

        if(nums[i] ==! val){
            nums[index] = nums[i];
            index ++
        }
    }
    return index;
}


console.log(removeElement(nums,val));

