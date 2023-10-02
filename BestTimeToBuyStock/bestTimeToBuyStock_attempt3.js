//Uses a system of two pointers, one set to the first element and the second set for the next element after it
//Store the current max_profit encountered as a variable
//Check conditions using a while loop during which the second pointer is less than the length of the array
//Check if the first pointer is less than the second
    //If so, calculate the difference between the two and store as profit
    //Using Math.max determine which is more between max_profit and the current profit
//Otherwise if first condition is not true and the first pointer is larger than the second, this indicates
//a negative or no profit
    //Set the first pointer equal to the second pointer as a result
//At the end of while loop, increment the right pointer to continue checking pairs
//Once loop is complete, return max_profit variable


const prices = [7,1,5,3,6,4];

var buyStock = function (prices) {

    var first = 0;
    var second = 1;
    var max_profit = 0;

    while(second < prices.length){

        if(prices[first] < prices[second]){
            let profit = prices[second] - prices[first];
            max_profit = Math.max(max_profit, profit);
        }

        else{
            first = second;
        }
        second ++;
    }

    return max_profit;

}


console.log(buyStock(prices));


//Third attempt completed on my own. Only mixed up "first = second" during if statment instead of during else
//Otherwise, solution completed on my own this time