import { cart, calculateCartQuantity } from "../../data/cart.js"
import { getProduct } from "../../data/products.js";
import formatCurrency from "../utils/price.js";
import { getDeliveryOption } from "../../data/delivery-options.js";




export function renderPaymentSummary(){

let paymentHTML = document.querySelector('.js-payment-summary')

if (cart.length === 0){
  paymentHTML.remove();
  document.querySelector('.js-page-title').innerHTML = 'Cart is empty'
} else {

  let itemsPriceCents = 0;
  let deliveryShipping = 0;

  cart.forEach((cartItem) => {

      const product = getProduct(cartItem.productId)
      itemsPriceCents += product.priceCents * cartItem.quantity;

      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
      deliveryShipping += deliveryOption.priceCents;
    });

  const totalBeforeTax = formatCurrency(itemsPriceCents + deliveryShipping)
  const tax = totalBeforeTax /10
  const orderTotal = (Number(totalBeforeTax) + tax)



  
    paymentHTML.innerHTML = `

      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (${calculateCartQuantity()}):</div>
        <div class="payment-summary-money">$
          ${formatCurrency(itemsPriceCents)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$
          ${formatCurrency(deliveryShipping)}
        </div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$
          ${totalBeforeTax}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$
          ${tax.toFixed(2)}
        </div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$
          ${orderTotal.toFixed(2)}
        </div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>

    `
}
}