// 8GB Memory
document.getElementById('8GB-memory').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 0;
    TotalPrice()
});
// 16GB Memory
document.getElementById('16GB-memory').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 180;
    TotalPrice()
});
// 256GB SSD storage
document.getElementById('256GB-storage').addEventListener('click', function () {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 0;
    TotalPrice()
});
// 512GB SSD storage
document.getElementById('512GB-storage').addEventListener('click', function () {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 100;
    TotalPrice()
});
// 1TB SSD storage
document.getElementById('1TB-storage').addEventListener('click', function () {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 180;
    TotalPrice()
});
// Free Delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    const DeliveryCost = document.getElementById('delivery-cost');
    DeliveryCost.innerText = 0;
    TotalPrice()
});
// Delivery With cost
document.getElementById('cost-delivery').addEventListener('click', function () {
    const DeliveryCost = document.getElementById('delivery-cost');
    DeliveryCost.innerText = 20;
    TotalPrice()
});

function TotalPrice(){
    const bestPrice = document.getElementById('best-cost').innerText;
    const bestPriceInt = parseInt(bestPrice);
    const extraMeroryPrice = document.getElementById('extra-memory-cost').innerText;
    const extraMeroryPriceInt = parseInt(extraMeroryPrice);
    const extraStoragePrice = document.getElementById('extra-storage-cost').innerText;
    const extraStoragePriceInt = parseInt(extraStoragePrice);
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const deliveryCostInt = parseInt(deliveryCost);
    const totalCost = bestPriceInt + extraMeroryPriceInt + extraStoragePriceInt+deliveryCostInt;
    console.log(totalCost);
    const totalPrice = document.getElementById('total-cost');
    totalPrice.innerText= totalCost;
}