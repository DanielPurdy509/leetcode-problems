/*
There are n kids with candies. 
You are given an integer array candies, 
where each candies[i] represents the number of candies the ith kid has, 
and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, 
after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/

const candies = [2,3,5,1,3];
const extraCandies = 3;

function kidsWithCandies (candies,extraCandies){
    let result = [];
    let greatestCandies = 0;
    for(let i = 0; i < candies.length; i ++) {
        if(candies[i] > greatestCandies) {
            greatestCandies = candies[i];
        }
    };
    for(let j = 0; j < candies.length; j ++) {
        if(candies[j] + extraCandies >= greatestCandies){
            result[j] = true;
        }
        else {
            result[j] = false;
        }
    }
    return result;
}

console.log(kidsWithCandies(candies,extraCandies));

/*
Start of with declaring a result array and a variable to store the value for the kid with the greatest amount
of candies before being given the extras.

The first for loop iterates across the array of kids to find the kid with the greatest base amount of candies,
comparing them against each other until the greatest is found.

The second for loop then iterates again across the array of kids, this time giving each kid the extra candies
and comparing the total against the previously found greatest base number of candies.

If at each iteration the kid's total is greater than or equal to the greatest base number of candies, true is logged
in the result array. Otherwise, false is logged. The array is then returned.
*/