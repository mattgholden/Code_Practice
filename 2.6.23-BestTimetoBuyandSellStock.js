// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
const maxProfit = (prices) => {
    let left = 0; //Buy
    let right = 1; //Sell
    let max_profit = 0;
    while (right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
}

// Python Alternative//
// class Solution:
//     def maxProfit(self,prices):
//         left = 0 #Buy
//         right = 1 #Sell
//         max_profit = 0
//         while right < len(prices):
//             currentProfit = prices[right] - prices[left] #our current Profit
//             if prices[left] < prices[right]:
//                 max_profit =max(currentProfit,max_profit)
//             else:
//                 left = right
//             right += 1
//         return max_profit