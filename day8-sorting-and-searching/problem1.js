function maximumBuyProduct(money, productPrice) {
    // your code here
    productPrice.sort((a, b) => a - b)
    // console.log("\nJumlah uang " + money);
    // console.log(`Array setelah diurutkan : [${productPrice}]`);
    let buyQuantity= 0
    for (let i = 0; i < productPrice.length; i++) {
        if (money-productPrice[i] >= 0) {
            money -= productPrice[i]
            buyQuantity++
        } else {
            return buyQuantity
        }
    }
}


// console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000]))      // 3
// console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])) // 4
// console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000]))   // 4
// console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000]))           // 1
// console.log(maximumBuyProduct(0, [10000, 30000]))                        // 0
module.exports = maximumBuyProduct;