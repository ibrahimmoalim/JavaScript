export const cart = [];

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
};