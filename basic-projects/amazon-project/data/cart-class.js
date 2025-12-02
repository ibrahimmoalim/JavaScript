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
    this.loadFromStorage();
  }

  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.key));

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
        deliveryOptionId: '1'
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
    this.saveToStorage();
    renderPaymentSummary();
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
const cart = new Cart('cartItems');
const businessCart = new Cart('cart-business');


console.log(cart)
console.log(businessCart)

console.log(cart instanceof Cart) // true