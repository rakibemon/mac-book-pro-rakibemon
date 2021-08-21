// function to get innerText of every cost and convert into Integer
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
function setCostValue(cost, specification) {
    const costing = document.getElementById(specification + '-cost');
    costing.innerText = cost;
    calculateTotalPrice();
};
// function to make a style when specification is selected
function selectedSpecificKeyword(specification, isAdded) {
    if (isAdded == true) {
        document.getElementById(specification).classList.add('btn-ash', 'text-white');
    }
    else {
        document.getElementById(specification).classList.remove('btn-ash', 'text-white');
    }
};
// 8GB Memory
document.getElementById('8GB-memory').addEventListener('click', function () {
    setCostValue(0, 'extra-memory');
    selectedSpecificKeyword('8GB-memory', true);
    selectedSpecificKeyword('16GB-memory', false);
});
// 16GB Memory
document.getElementById('16GB-memory').addEventListener('click', function () {
    setCostValue(180, 'extra-memory');
    selectedSpecificKeyword('16GB-memory', true);
    selectedSpecificKeyword('8GB-memory', false);
});
// 256GB SSD storage
document.getElementById('256GB-storage').addEventListener('click', function () {
    setCostValue(0, 'extra-storage');
    selectedSpecificKeyword('256GB-storage', true);
    selectedSpecificKeyword('512GB-storage', false);
    selectedSpecificKeyword('1TB-storage', false);
});
// 512GB SSD storage
document.getElementById('512GB-storage').addEventListener('click', function () {
    setCostValue(100, 'extra-storage');
    selectedSpecificKeyword('256GB-storage', false);
    selectedSpecificKeyword('512GB-storage', true);
    selectedSpecificKeyword('1TB-storage', false);
});
// 1TB SSD storage
document.getElementById('1TB-storage').addEventListener('click', function () {
    setCostValue(180, 'extra-storage');
    selectedSpecificKeyword('256GB-storage', false);
    selectedSpecificKeyword('512GB-storage', false);
    selectedSpecificKeyword('1TB-storage', true);
});
// Free Delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    setCostValue(0, 'delivery');
    selectedSpecificKeyword('free-delivery', true);
    selectedSpecificKeyword('cost-delivery', false);
});
// Delivery With cost
document.getElementById('cost-delivery').addEventListener('click', function () {
    setCostValue(20, 'delivery');
    selectedSpecificKeyword('free-delivery', false);
    selectedSpecificKeyword('cost-delivery', true);
});
// Event Handler for Promo code
document.getElementById('apply-button').addEventListener('click', function () {
    const totalPrice = calculateTotalPrice();
    const promoInput = document.getElementById('promo-input').value;
    const errorMessage = document.getElementById('errormessage');
    const afterPromoText = document.getElementById('after-promo-text');
    const savingsAmount = ((totalPrice * 20) / 100);
    const promoSection = document.getElementById('promo-amount');
    if (promoInput.toLowerCase() == 'stevekaku') {
        const totalAfterPromo = totalPrice - savingsAmount;
        document.getElementById('after-promo-cost').innerText = totalAfterPromo;
        afterPromoText.style.display = 'inline';
        document.getElementById('promo-input').style = null;
        errorMessage.style.display = 'none';
        const savings = document.createElement('h5');
        savings.innerText = '[ Save $' + savingsAmount + ' ]';
        savings.style.textAlign = 'center';
        promoSection.appendChild(savings);
        document.getElementById('apply-button').setAttribute('disabled', true);
    }
    else {
        document.getElementById('promo-input').style.outline = '2px solid red';
        document.getElementById('promo-input').style.marginRight = '10px';
        errorMessage.style.display = 'block';
        afterPromoText.style.display = 'none';
    }
    document.getElementById('promo-input').value = '';
});