import {cart, removeFromCart, calculateCartQuantity, updateQuantityLabel, updateDeliveryOption} from '../../data/cart.js'
import {getProduct} from '../../data/products.js'
import formatCurrency from '../utils/price.js';
import {deliveryOptions, getDeliveryOption} from '../../data/delivery-options.js';
import { renderPaymentSummary } from './payment-summary.js';



export function renderOrderSummary(){

  let cartSummaryHTML = ''

  cart.forEach((cartItem) => {
    // get productId out of cartItem
    const {productId} = cartItem;

    const matchingProduct = getProduct(productId);
    

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);
    

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${deliveryOption.date}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">
                ${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-link-primary js-update-button" data-item-id="${matchingProduct.id}">
                Update
              </span>
              <input class="input-quantity js-input-quantity-${matchingProduct.id}" 
              type="number" min="1">
              <span class="save-quantity link-primary js-save-link" data-item-id="${matchingProduct.id}">
              Save </span>
              <span class="delete-quantity-link link-primary js-delete-button" data-item-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>
          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `
  });

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;


  function deliveryOptionsHTML(matchingProduct, cartItem){
    let html = ''

    deliveryOptions.forEach((deliveryOption) => {

      const price = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId

      html += `
        
            <div class="delivery-option js-delivery-option"
              data-product-id="${matchingProduct.id}"
              data-delivery-option-id="${deliveryOption.id}">
              <input type="radio"
                ${isChecked ? 'checked' : ''}
              class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  ${deliveryOption.date}
                </div>
                <div class="delivery-option-price">
                  ${price} Shipping
                </div>
              </div>
            </div>
      `

    })
    return html;
  };


  document.querySelectorAll('.js-delete-button')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const {itemId} = button.dataset;
        removeFromCart(itemId)

        const container = document.querySelector(`.js-cart-item-${itemId}`)
          container.remove();
          updateCartQuantity();
      })
    });


  function updateCartQuantity(){
    
    const checkoutHeader = document.querySelector('.js-return-to-home-link')
    checkoutHeader.innerHTML = `${calculateCartQuantity()} items`;
  };
  updateCartQuantity();


  document.querySelectorAll(`.js-update-button`)
    .forEach((button) => {
      button.addEventListener('click', () => {
        const {itemId} = button.dataset;

        const container = document.querySelector(`.js-cart-item-${itemId}`)

        container.classList.add('is-editing-quantity');

        const input = document.querySelector(`.js-input-quantity-${itemId}`)
        input.select();
        input.addEventListener('keydown', (event) => {
          if (event.key === 'Enter'){
            saveUpdatedQuantity(itemId);
          }
        })
      })
    });


  function saveUpdatedQuantity(itemId){
    const container = document.querySelector(`.js-cart-item-${itemId}`);
    container.classList.remove('is-editing-quantity');


    const quantityInput = document.querySelector(`.js-input-quantity-${itemId}`)

    const newQuantity = Number(quantityInput.value);

    updateQuantityLabel(newQuantity, itemId);
    updateCartQuantity();
    renderPaymentSummary();
    quantityInput.value = null;
  };


  document.querySelectorAll('.js-save-link')
    .forEach((link) => {
      const {itemId} = link.dataset;
      link.addEventListener('click', () => {
        saveUpdatedQuantity(itemId);
      })
    });

  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
        element.addEventListener('click', () => {
          const {productId, deliveryOptionId} = element.dataset;
            updateDeliveryOption(productId, deliveryOptionId);
            // regenerate the whole page, to update delivery data automatically when delivery option is selected
            renderOrderSummary();
            renderPaymentSummary();
          })
      });
};