
const priceElement = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const buyNowButton = document.getElementById('buy-now-btn');


const productPrice = parseFloat(priceElement.textContent.replace('$', ''));


function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = (productPrice * quantity).toFixed(2);
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}


quantityInput.addEventListener('input', updateTotalPrice);


buyNowButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = (productPrice * quantity).toFixed(2);
    alert(`You added ${quantity} items to your cart for $${totalPrice}`);
});


updateTotalPrice();
