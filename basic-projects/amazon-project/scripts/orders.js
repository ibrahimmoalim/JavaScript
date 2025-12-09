import formatCurrency from "./utils/price.js";
import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs/+esm';
import { getProduct } from "../data/products.js";
import { cart } from "../data/cart-class.js";




export const orders = JSON.parse(localStorage.getItem('orders')) || [];


export function addOrder(order){
  orders.unshift(order)
  saveToStorage()
};

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders))
};


generateOrdersHTML();

function generateOrdersHTML(){
  let ordersHTML = document.querySelector('.js-orders-grid')

  
  if (!ordersHTML) return; // This module runs on multiple pages. Skip rendering unless the Orders UI (ordersHTML) exists.

  // ordersHTML.innerHTML = localStorage.getItem('ordersHTML') || ''

  document.querySelector('.js-cart-quantity')
    .innerHTML = cart.calculateCartQuantity();

  if (orders.length <= 0){
    ordersHTML.remove()
    document.querySelector('.js-orders-page-title').innerHTML = 'You have no orders'
  } else {

    orders.forEach(order => {

      const orderPlaced = dayjs(order.orderTime).format('MMMM D')
      const totalCost = formatCurrency(order.totalCostCents)

      let orderedProductsHTML = ''

      order.products.forEach(item => {
        const matchingProduct = getProduct(item.productId)


        const time = dayjs(item.estimatedDeliveryTime).format('MMMM D')


        orderedProductsHTML += `
          <div class="product-image-container">
            <img src="${matchingProduct.image}">
          </div>
      
          <div class="product-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${time}
            </div>
            <div class="product-quantity">
              Quantity: ${item.quantity}
            </div>
            <button class="buy-again-button button-primary">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>
      
          <div class="product-actions">
            <a href="tracking.html?orderId=${order.id}&productId=${item.productId}">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>
        `
      })



      ordersHTML.innerHTML += `
      
        <div class="order-container">
            
            <div class="order-header">
              <div class="order-header-left-section">
                <div class="order-date">
                  <div class="order-header-label">Order Placed:</div>
                  <div>${orderPlaced}</div>
                </div>
                <div class="order-total">
                  <div class="order-header-label">Total:</div>
                  <div>${totalCost}</div>
                </div>
              </div>
  
              <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>${order.id}</div>
              </div>
            </div>
  
            <div class="order-details-grid">
              ${orderedProductsHTML}
            </div>
        </div>
      `
    })


    localStorage.setItem('ordersHTML', (ordersHTML.innerHTML))
  }
};