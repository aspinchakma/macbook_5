//FUNCTION FOR MEMORY
function memoryPrice(isLowestPrice) {
    const extraMemoryPrice = document.getElementById('extra-memory-price');
    if (isLowestPrice == true) {
        extraMemoryPrice.innerText = 0;
    }
    else if (isLowestPrice == false) {
        extraMemoryPrice.innerText = 180;
    }
    totalPrice();
};
//FUNCTION FOR STORAGE
function storagePrice(isLowestPrice) {
    const extraStoragePrice = document.getElementById('extra-storage-cost');
    if (isLowestPrice == true) {
        extraStoragePrice.innerText = 0;
    } else if (isLowestPrice == false) {
        extraStoragePrice.innerText = 100;
    } else {
        extraStoragePrice.innerText = 180;
    };
    totalPrice();
};

// FUCNTION DELIVERY CHARGE 

function deliveryCharge(isFree) {
    const deliveryCharge = document.getElementById('delivery-charge');
    if (isFree == true) {
        deliveryCharge.innerText = 0;
    }
    else {
        deliveryCharge.innerText = 20;
    };
    totalPrice();
};

// TOTAL PRICE FUNCTION 
function totalPrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryPrice = parseInt(document.getElementById('extra-memory-price').innerText);
    const extraStoragePrice = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText);
    const totalPrice = document.getElementById('total-price');
    const discoundtedText = document.getElementById('discounted-price');
    totalPrice.innerText = bestPrice + extraMemoryPrice + extraStoragePrice + deliveryCharge;

    discoundtedText.innerText = bestPrice + extraMemoryPrice + extraStoragePrice + deliveryCharge;
    return totalPrice.innerText;
}
// MEMORY LOWEST PRICE BUTTON 
document.getElementById('lowest-memory-button').addEventListener('click', function () {
    memoryPrice(true);
});
// MEMORY HIGHEST PRICE BUTTON 
document.getElementById('highest-memory-button').addEventListener('click', function () {
    memoryPrice(false);
});


//LOWEST STORAGE BUTTON 
document.getElementById('lowest-storage-button').addEventListener('click', function () {
    storagePrice(true);
})

// MIDDLE STORAGE BUTTON
document.getElementById('midle-storage-button').addEventListener('click', function () {
    storagePrice(false);

})

// HIGHEST STORAGE BUTTON
document.getElementById('highest-storage-button').addEventListener('click', function () {
    storagePrice('highestPrice')

})

//SHIPPING COST FREE BUTTON
document.getElementById('shipping-cost-free').addEventListener('click', function () {
    deliveryCharge(true);
})

//SHIPPING COST 20$ BUTTON
document.getElementById('shipping-cost-paid').addEventListener('click', function () {
    deliveryCharge(false);

});

// PROMO CODE BUTTON 
document.getElementById('promo-code-button').addEventListener('click', function () {
    // promo input field
    const promoCode = document.getElementById('promo-code-field');
    const promoCodeText = promoCode.value;

    // DISCOUNTED PRICE 
    const discoundted = document.getElementById('discounted-price');
    const getTotalPrice = totalPrice();

    if (promoCodeText == 'stevekaku') {
        // 20% DISCOUNT
        discoundted.innerText = getTotalPrice - (getTotalPrice * 20) / 100
        promoCode.value = '';
    };


})

