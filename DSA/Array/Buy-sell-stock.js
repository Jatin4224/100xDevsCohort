var maxProfit = function (prices) {
  // if i buy on day 1 and sell it to day 6 the profit = 6-1= 5
  //I will keep the track of the minimum value and i also keep the     track of the maxProfit
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
};
