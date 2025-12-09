import { orders } from "./orders.js";
import { getProduct } from "../data/products.js";
import { cart } from "../data/cart-class.js";
import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs/+esm';




const url = new URL(window.location.href);

const orderId = url.searchParams.get('orderId')
const productId = url.searchParams.get('productId')


let trackingPageHTML = document.querySelector('.js-main')

const matchingProduct = getProduct(productId)

let quantity;
let arrivalTime;
let orderTime;
let progressBar;

orders.forEach(order => {

  orderTime = dayjs(order.orderTime).format('D')

  order.products.forEach(item => {

    if (item.productId === matchingProduct.id && order.id === orderId){

      quantity = item.quantity
      arrivalTime = dayjs(item.estimatedDeliveryTime)

      const deliveryTime = arrivalTime.format('D')
      progressBar = (((dayjs().format('D')) - orderTime) / (deliveryTime - orderTime)) * 100
      
    }
  })
});

document.querySelector('.js-cart-quantity')
    .innerHTML = cart.calculateCartQuantity();


trackingPageHTML.innerHTML = `

  <div class="order-tracking">
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${arrivalTime.format('dddd, MMMM D')}
    </div>

    <div class="product-info">
      ${matchingProduct.name}
    </div>

    <div class="product-info">
      Quantity: ${quantity}
    </div>

    <img class="product-image" src="${matchingProduct.image}">

    <div class="progress-labels-container">
      <div class="progress-label js-preparing">
        Preparing
      </div>
      <div class="progress-label js-shipped">
        Shipped
      </div>
      <div class="progress-label js-delivered">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div style="width:${progressBar}%;" class="progress-bar"></div>
    </div>
  </div>

`

if (progressBar <= 49){
  document.querySelector('.js-preparing')
    .classList.add('current-status')
} else if (progressBar > 49 && progressBar < 100){
  document.querySelector('.js-shipped')
    .classList.add('current-status')
} else {
  document.querySelector('.js-delivered')
    .classList.add('current-status')
};