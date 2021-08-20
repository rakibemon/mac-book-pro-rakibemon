function getInnerTextOfCost(specific){
    const Price = document.getElementById(specific+'-cost').innerText;
    const PriceInt = parseInt(Price);
    return PriceInt;
}
function calculateTotalPrice() {
    const bestPriceInt = getInnerTextOfCost('best');
    const extraMeroryPriceInt = getInnerTextOfCost('extra-memory');
    const extraStoragePriceInt = getInnerTextOfCost('extra-storage');
    const deliveryCostInt = getInnerTextOfCost('delivery');
    const totalCost = bestPriceInt + extraMeroryPriceInt + extraStoragePriceInt + deliveryCostInt;
    const totalPrice = document.getElementById('total-cost');
    totalPrice.innerText = totalCost;
}
function getSetCostValue(cost,specific) {
    debugger;
    const costing = document.getElementById(specific + '-cost');
    costing.innerText = cost;
    calculateTotalPrice();
};
// 8GB Memory
document.getElementById('8GB-memory').addEventListener('click', function () {
    getSetCostValue(0,'extra-memory');
});
// 16GB Memory
document.getElementById('16GB-memory').addEventListener('click', function () {
    getSetCostValue(180,'extra-memory');
});
// 256GB SSD storage
document.getElementById('256GB-storage').addEventListener('click', function () {
    getSetCostValue(0,'extra-storage');
});
// 512GB SSD storage
document.getElementById('512GB-storage').addEventListener('click', function () {
    getSetCostValue(100,'extra-storage');
});
// 1TB SSD storage
document.getElementById('1TB-storage').addEventListener('click', function () {
    getSetCostValue(180,'extra-storage');
});
// Free Delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    getSetCostValue(0,'delivery');
});
// Delivery With cost
document.getElementById('cost-delivery').addEventListener('click', function () {
    getSetCostValue(20,'delivery');
});