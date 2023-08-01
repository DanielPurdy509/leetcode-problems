/*
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store. 
*/

const height = [1,8,6,2,5,4,8,3,7];
const height1 = [1,1];

var maxArea = function(height) {
    
    let heighestNum = {
        num : 0,
        index : null,
    };
    
    let secondHeighestNum = {
        num : 0,
        index : null,
    }
    
    for(let i = 0 ; i < height.length ; i ++) {
        if (height[i] > heighestNum.num){
            heighestNum.num = height[i];
            heighestNum.index = i;
        }
    }
    for(let j = 0 ; j < height.length ; j++) {
        if (height[j] <= heighestNum.num && height[j] > secondHeighestNum.num){
            secondHeighestNum.num = height[j];
            secondHeighestNum.index = j;
        }
    }

    console.log(heighestNum,secondHeighestNum);

    if(heighestNum.index === secondHeighestNum.index){
        return secondHeighestNum.num;
    }

    let result = secondHeighestNum.num * (Math.abs(heighestNum.index - secondHeighestNum.index));

    return result;
}

console.log(maxArea(height));