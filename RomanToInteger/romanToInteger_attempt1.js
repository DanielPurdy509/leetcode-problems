/*
The goal of this problem is to convert a string representing a roman numerial to its value as an integer

I had to look up a solution for my first attempt at this problem
First step is to store the value of each roman numerial so that it can be referrenced later.
We also create a variable to store the total calculated value of the string and intitialize it at 0.
Then we iterate across the string backwards, from right to left
We create a variable to store the equivalent roman numerial for the current character of the string in our
    iteration
We check whether the current numerial is less or greater than the current calculated value.
If it is less than while also not being the first iteration, subtract it from the total calculation
Otherwise, we add that to the total calculation
Once the iteration is complete, we return the total calculation.
*/

const s = "LVIII";

var romanToInteger = function (s) {

    const romanValues = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };

    var total = 0;

    for( let i = s.length -1; i >= 0; i --){

        const currentNum = romanValues[s[i]];

        if(i < s.length -1 && currentNum < romanValues[s[i+1]]){
            total -= currentNum;
        }
        else {
            total += currentNum;
        }
    }

    return total;
}

console.log(romanToInteger(s));