export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = [{
  productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
  quantity: 2
},
{
  productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
  quantity: 4
}];
}



function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

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
      quantity
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