// Using two pointers, compare the first with the second to see if the first is larger
// First pointer is set to the first element, the second is set to the element after the first
// Store the current max profit as a variable
// Use a while loop to compare if first is greater than last pointer for duration of array
// If the first pointer is larger than second, calculate and store the difference as profit
    // Use Math.max method to compare profit and max profit and set max profit to whichever is larger.
// If first pointer is less than the second, there is no or negative profit
    // In this case set first pointer equal to right
// After both cases are checked, increment right pointer
// Once loop is completed, return max profit variable.

const prices = [7,1,5,3,6,4];

var buyStock = function (prices) {

    var left = 0;
    var right = 1;
    var max_profit = 0;


    while(right < prices.length){
        
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            max_profit = Math.max(profit,max_profit);
        }
        else {
            left = right;
        }

        right ++;
    }

    return max_profit;
}


console.log(buyStock(prices));

/*
Reattempted a few days after first. Forgot some parts of the logic and had to look at old attempt 
a few times. Was able to write most of solution on my own though. Will try again one more time in 
a few days to see if I can do it all on my own.
*/