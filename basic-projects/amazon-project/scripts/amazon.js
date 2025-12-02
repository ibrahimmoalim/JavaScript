import {addToCart, calculateCartQuantity} from '../data/cart.js';
import {products} from '../data/products.js'

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="${product.getStarsUrl()}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        ${product.getPrice()}
      </div>

      <div class="product-quantity-container">
        <select class="js-select-quant-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `
});

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;

updateCartQuantity();

function updateCartQuantity(){
  const cartNum = document.querySelector('.js-cart-quantity');
  cartNum.innerHTML = calculateCartQuantity();
};

function displayAddedMsg(productId){

  const addedMsgElement = document.querySelector(`.js-added-to-cart-${productId}`);
  addedMsgElement.classList.add('js-added');
      
  // Clear previous timeout if it exists
  if (addedMsgElement.dataset.timeoutId){
    clearTimeout(addedMsgElement.dataset.timeoutId)
  };

  // Set a new timeout and store its ID in the element's dataset
  const tempTimeoutId = setTimeout(() => {
    addedMsgElement.classList.remove('js-added');
    delete addedMsgElement.dataset.timeoutId; // ensures you don’t leak memory for old timeouts.
  }, 1000);
  addedMsgElement.dataset.timeoutId = tempTimeoutId;
};

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const {productId} = button.dataset;
      
      addToCart(productId);
      updateCartQuantity();
      displayAddedMsg(productId);

    });
  });