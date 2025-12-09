import { cart } from "../../data/cart-class.js"
import { getProduct } from "../../data/products.js";
import formatCurrency from "../utils/price.js";
import { getDeliveryOption } from "../../data/delivery-options.js";
import { addOrder } from "../../data/orders.js";




export function renderPaymentSummary(){

  let paymentHTML = document.querySelector('.js-payment-summary')

  if (cart.cartItems.length <= 0){
    paymentHTML.remove();
    document.querySelector('.js-page-title').innerHTML = 'Cart is empty'
  } else {

    let itemsPriceCents = 0;
    let deliveryShipping = 0;

    cart.cartItems.forEach((cartItem) => {

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
        <div>Items (${cart.calculateCartQuantity()}):</div>
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

      <button class="place-order-button button-primary js-place-order">
        Place your order
      </button>

    `

    document.querySelector('.js-place-order')
      .addEventListener('click', async () => {

        try {

          const response = await fetch('https://supersimplebackend.dev/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              cart: cart
            })
          });

          const order = await response.json()
          addOrder(order);
          paymentHTML.remove();
          document.querySelector('.js-page-title').innerHTML = 'Cart is empty';

        } catch (error) {

          console.error('Unexpected error, try again later.')
          console.error(error)
          
        }

        window.location.href = 'orders.html';
    });
  };

};