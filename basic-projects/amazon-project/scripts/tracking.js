import { orders } from "./orders.js";
import { getProduct } from "../data/products.js";
import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs/+esm';




const url = new URL(window.location.href);

const orderId = url.searchParams.get('orderId')
const productId = url.searchParams.get('productId')


let trackingPageHTML = document.querySelector('.js-main')

const matchingProduct = getProduct(productId)

let quantity;
let arrivalTime;

orders.forEach(order => {

  order.products.forEach(item => {

    if (item.productId === matchingProduct.id && order.id === orderId){

      quantity = item.quantity
      arrivalTime = dayjs(item.estimatedDeliveryTime).format('dddd, MMMM D')
      
    }
  })
})


trackingPageHTML.innerHTML = `

  <div class="order-tracking">
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${arrivalTime}
    </div>

    <div class="product-info">
      ${matchingProduct.name}
    </div>

    <div class="product-info">
      Quantity: ${quantity}
    </div>

    <img class="product-image" src="${matchingProduct.image}">

    <div class="progress-labels-container">
      <div class="progress-label">
        Preparing
      </div>
      <div class="progress-label current-status">
        Shipped
      </div>
      <div class="progress-label">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar"></div>
    </div>
  </div>

`