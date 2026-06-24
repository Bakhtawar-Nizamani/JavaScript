// Return 10% discount on price


function calculateDiscount(price){
    return price * 0.1
}

let price = 3000;
const discountedPrice = calculateDiscount(price)
const finalPrice = price - discountedPrice

console.log(`Discount = ${discountedPrice}`)
console.log(`Final Price = ${finalPrice}`)
