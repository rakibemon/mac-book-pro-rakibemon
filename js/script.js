// function to get innerText of every cost and convert into ParseInt
function getInnerTextOfCost(specific) {
    const Price = document.getElementById(specific + '-cost').innerText;
    const PriceInt = parseInt(Price);
    return PriceInt;
}
// function to Calculate total Sum after select specification and set the total value to Total Price
function calculateTotalPrice() {
    const bestPriceInt = getInnerTextOfCost('best');
    const extraMeroryPriceInt = getInnerTextOfCost('extra-memory');
    const extraStoragePriceInt = getInnerTextOfCost('extra-storage');
    const deliveryCostInt = getInnerTextOfCost('delivery');
    const CostSummation = bestPriceInt + extraMeroryPriceInt + extraStoragePriceInt + deliveryCostInt;
    document.getElementById('total-cost').innerText = CostSummation;
    document.getElementById('after-promo-cost').innerText = CostSummation;
    return CostSummation;
}
// function to set cost in every specification also update total Price
function setCostValue(cost, specific) {
    const costing = document.getElementById(specific + '-cost');
    costing.innerText = cost;
    calculateTotalPrice();
};
// 8GB Memory
document.getElementById('8GB-memory').addEventListener('click', function () {
    setCostValue(0, 'extra-memory');
});
// 16GB Memory
document.getElementById('16GB-memory').addEventListener('click', function () {
    setCostValue(180, 'extra-memory');
});
// 256GB SSD storage
document.getElementById('256GB-storage').addEventListener('click', function () {
    setCostValue(0, 'extra-storage');
});
// 512GB SSD storage
document.getElementById('512GB-storage').addEventListener('click', function () {
    setCostValue(100, 'extra-storage');
});
// 1TB SSD storage
document.getElementById('1TB-storage').addEventListener('click', function () {
    setCostValue(180, 'extra-storage');
});
// Free Delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    setCostValue(0, 'delivery');
});
// Delivery With cost
document.getElementById('cost-delivery').addEventListener('click', function () {
    setCostValue(20, 'delivery');
});
// Event Handler for Promo code
document.getElementById('apply-button').addEventListener('click', function () {
    const totalPrice = calculateTotalPrice();
    const promoInput = document.getElementById('promo-input').value;
    const errorMessage = document.getElementById('errormessage');
    if (promoInput == 'stevekaku') {
        const totalAfterPromo = totalPrice - ((totalPrice * 20) / 100);
        document.getElementById('after-promo-cost').innerText = totalAfterPromo;
        document.getElementById('promo-input').style = null;
        errorMessage.style.display='none';
    }
    else {
        document.getElementById('promo-input').style.outline = '2px solid red';
        document.getElementById('promo-input').style.marginRight = '10px';
        errorMessage.style.display='block';

    }
    document.getElementById('promo-input').value = ''
})