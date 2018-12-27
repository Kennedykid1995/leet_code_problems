function maxProfit(prices){
    // Say you have an array for which the ith element is 
    // the price of a given stock on day i.
    // If you were only permitted to complete at most one
    // transaction (i.e., buy one and sell one share of the stock),
    // design an algorithm to find the maximum profit.
    // Note that you cannot sell a stock before you buy one.
    
    //what to do
    //you will have to go through the prices and add them up individually. 
    //starting with index[0] and subtracting it from each. 
    //so if you bought today 7 then sold the next day it would be 1 - 7, which is horrible
    //so dont return that. The selling price needs to be larger than the buying price, 
    //so since 7 is the largest it wont be an out come. 
    //go to the next day, buy for 1 then sell for 5 is good, but you could skip a few more days 
    //and sell on 6 and that would be the output the largest amount possible for this array
    //of prices. 
    //we will need three objects, a max for the max value, a min will be every price. 
    //Set min to inifinity so you can change it to the prices.
    //and the last object will diff which will track the difference of the prices. 
    //and increase as the selling amount gets higher.
    //will need to loop through and perform the problem in the form of if statements. 
    let max = 0; 
    let min = Infinity; 
    let diff = 0; 
    for(let i = 0; i < prices.length; i++){
        let price = prices[i];
        if(min > price){
          min = price; 
          console.log(min)
        }
        diff = price - min;
         console.log(min);
        if(max < diff){
          max = diff
        }
      }
      return max
}
maxProfit([7,1,5,3,6,4])
//output: 5