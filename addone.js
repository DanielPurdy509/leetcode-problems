/*
You are given a large integer represented as an integer array digits,
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

const digits = [1,2,9,9];

let addOne = (digits) => {

    for(let i = digits.length-1 ; i>=0 ; i--){
        if(digits[i] < 9){
            digits[i] ++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

console.log(addOne(digits));

/*
The function starts out by iterating backwards across the input digits array.
At the start of the iteration, it will check to see it the last element of the array
(the last digit of the number) is less than 9, in which case it can simply be incremented
and the array as a whole returned.

Otherwise, if the current element is equal to nine, it will set that element equal to 0 and
move on to the next element to check. It will then continue to check each element. In the case the
element is less than nine, that element will be incremented, the array will be returned, and the loop stopped.
In the case the element is equal to 9, it will be set to 0 as in the last case and will move on to check the next
element.

If, at the end of the loop and upon reaching the front of the array, all elements check have been found to be
9 and subsequently changed to 0, the function will call the unshift method. 1 will be added to the front of the
array, creating a rounded and complete number, at which point the array will be returned.
*/