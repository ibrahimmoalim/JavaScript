import deliveryOptions from '../data/delivery-options.js';

// named export, used when there are multiple exports in the file
export let cart = JSON.parse(localStorage.getItem('cart')) || [];


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
};

export function addToCart(productId){
  const selectQuant = document.querySelector(`.js-select-quant-${productId}`)
  const quantity = Number(selectQuant.value)

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: deliveryOptions[0].id
    });
  };

  saveToStorage();
};


export function removeFromCart(itemId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== itemId){
      newCart.push(cartItem)
    }
  });
  cart = newCart;
  saveToStorage();
};


export function calculateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })
  return cartQuantity;
};


export function updateQuantityLabel(newQuantity, itemId){
  cart.forEach((cartItem) => {
    if (cartItem.productId === itemId && newQuantity > 0){
      document.querySelector(`.js-quantity-label-${itemId}`).innerHTML = newQuantity;
      cartItem.quantity = newQuantity;
    }
  })
};