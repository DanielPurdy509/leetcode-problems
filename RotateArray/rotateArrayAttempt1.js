const nums = [1,2,3,4,5,6,7];
const k = 3;

var rotateArray = function (nums,k) {

    while(k > 0){
        let storedElement = nums.pop();
        nums.unshift(storedElement);
        k--;
    }
    
}

rotateArray(nums,k);
console.log(nums);

//Accepted first attempt without looking up solution. Needed to look up array methods
//runtime = 56 ms

/*
First we will want to remove the last element from the back of the array and store it.
We then will want to take the stored element and add it to the front of the array.
Repeat for k amount of times
*/