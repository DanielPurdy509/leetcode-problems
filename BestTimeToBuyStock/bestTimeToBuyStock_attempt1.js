/*
I got stuck on the first attempt, so this is from following an existing solution:

Create two pointers, one for left and right that will start out next to each other.
Also create a variable to store the max_profit encountered to be compared later.
Within the context of right < prices.length, check if prices left < right.
If true, record the current profit as prices[right] - prices[left].
Use Math.max(max_profit,profit) to compare both values and set max_profit to which is biggest.
Otherwise, if prices left < right is false (indicating negative or no profit):
Set left = right and increment right. This will continue checking the rest of the array.
Once loop is complete, return max_profit (with max_profit = 0 indicating no profit to be made).
*/

const prices = [7,1,5,3,6,4];
// const prices = [7,6,4,3,1];

var maxProfit = function (prices) {

    var left = 0;
    var right = 1;
    var max_profit = 0;

    while (right < prices.length){

        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            max_profit = Math.max(max_profit,profit);
        }

        else{
            left = right;
        }
        right ++;

    }
    return max_profit;
}

console.log(maxProfit(prices));

// This solution works however I get a time limit exceeded error when using Leetcode's website >:(