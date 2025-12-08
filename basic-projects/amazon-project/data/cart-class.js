import { renderPaymentSummary } from "../scripts/checkout/payment-summary.js";
import { deliveryOptions } from "./delivery-options.js";

// OOP classes
// make a class
class Cart {
  // line below is same as "cartItems = undefined;"
  cartItems;

  constructor(localStorageKey){
    // "this.key" creates a variable called key
    // it's like having "key;" or "key = undefined;" above this constructor
    // and then doing "this.key = (something)"
    // you can just do "this.key" and it's the same
    this.key = localStorageKey;
    this.#loadFromStorage();
  }

  // make method private with "#" so it can't be accessed and changed outside the class
  // use "#" infront of method to access it inside the class e.g this.#loadFromStorage();
  #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.key)) || []
  }

  saveToStorage(){
    localStorage.setItem(this.key, JSON.stringify(this.cartItems))
  }

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
    }
    this.saveToStorage();
  }

  removeFromCart(itemId){
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== itemId){
        newCart.push(cartItem)
      }
    });

    this.cartItems = newCart;
    renderPaymentSummary();
    this.saveToStorage();
  }

  calculateCartQuantity(){
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    })
    this.saveToStorage();
    return cartQuantity;
  };

  updateQuantityLabel(newQuantity, itemId){
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === itemId && newQuantity > 0){
        document.querySelector(`.js-quantity-label-${itemId}`).innerHTML = newQuantity;
        cartItem.quantity = newQuantity;
      }
    })
  };

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


// generate objects with declared class
export const cart = new Cart('cartItems');
const businessCart = new Cart('cart-business');