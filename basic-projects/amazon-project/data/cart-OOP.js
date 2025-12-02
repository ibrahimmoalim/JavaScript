import {deliveryOptions} from '../data/delivery-options.js';
import { renderPaymentSummary } from '../scripts/checkout/payment-summary.js';

const cart = {
  cartItems: undefined,
  
  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (!this.cartItems) {
      this.cartItems = [{
        productId: 'sfs',
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: 'sfsh',
        quantity: 1,
        deliveryOptionId: '2'
      }]
    }
  },
  
  saveToStorage(){
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  },

  addToCart(productId){
    const selectQuant = document.querySelector(`.js-select-quant-${productId}`)
    const quantity = selectQuant ? Number(selectQuant.value) : 1;

    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: deliveryOptions[0].id
      });
    };

    this.saveToStorage();
  },

  removeFromCart(itemId){
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== itemId){
        newCart.push(cartItem)
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
    renderPaymentSummary();
  },

  calculateCartQuantity(){
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    })
    this.saveToStorage();
    return cartQuantity;
  },

  updateQuantityLabel(newQuantity, itemId){
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === itemId && newQuantity > 0){
        document.querySelector(`.js-quantity-label-${itemId}`).innerHTML = newQuantity;
        cartItem.quantity = newQuantity;
      }
    })
  },

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
}

cart.loadFromStorage();

console.log(cart)



const businessCart = {
  cartItems: undefined,
  
  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (!this.cartItems) {
      this.cartItems = [{
        productId: 'sfs',
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: 'sfshdfsfs',
        quantity: 3,
        deliveryOptionId: '2'
      }]
    }
  },
  
  saveToStorage(){
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  },

  addToCart(productId){
    const selectQuant = document.querySelector(`.js-select-quant-${productId}`)
    const quantity = selectQuant ? Number(selectQuant.value) : 1;

    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: deliveryOptions[0].id
      });
    };

    this.saveToStorage();
  },

  removeFromCart(itemId){
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== itemId){
        newCart.push(cartItem)
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
    renderPaymentSummary();
  },

  calculateCartQuantity(){
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    })
    this.saveToStorage();
    return cartQuantity;
  },

  updateQuantityLabel(newQuantity, itemId){
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === itemId && newQuantity > 0){
        document.querySelector(`.js-quantity-label-${itemId}`).innerHTML = newQuantity;
        cartItem.quantity = newQuantity;
      }
    })
  },

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
}

businessCart.loadFromStorage();

console.log(businessCart)