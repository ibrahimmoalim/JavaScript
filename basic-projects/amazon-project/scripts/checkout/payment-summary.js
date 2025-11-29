import { cart, calculateCartQuantity } from "../../data/cart.js"
import { products } from "../../data/products.js";
import formatCurrency from "../utils/price.js";





let itemsPrice = 0;

cart.forEach((cartItem) => {
    // get productId out of cartItem
    const {productId} = cartItem;

    let matchingProduct;
    // get the full product just using id
    products.forEach((product) => {
      if (product.id === productId){
        matchingProduct = product;
      }
    });
    itemsPrice += Number(formatCurrency(matchingProduct.priceCents * cartItem.quantity))
  });    

export function renderPaymentSummary(){


  document.querySelector('.js-payment-summary')
    .innerHTML = `

      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (${calculateCartQuantity()}):</div>
        <div class="payment-summary-money">$${itemsPrice}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$4.99</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$47.74</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$4.77</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$52.51</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>

    `

  
}
