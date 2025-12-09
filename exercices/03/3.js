

function changeColor(selector){
  let buttonElement = document.querySelector(selector);
  if (!buttonElement.classList.contains('but1')){
    turnOffOtherButtons()
    buttonElement.classList.add('but1')
  } else {
    buttonElement.classList.remove('but1');
  }
}

function turnOffOtherButtons(){
  const otherButtens= document.querySelector('.but1')
  if (otherButtens){
    otherButtens.classList.remove('but1')
  }
}





/*      
const product1={
  name: 'basketball',
  price: 2095,
  'delivery-time': '3days'
}

const product2={
  name: 'basketball',
  price: 1500,
  'delivery-time': '3days'
}

const product3={
  name: 'basketball',
  price: 1500,
  'delivery-time': '3days'
}


/*
function comparePrice(product1, product2){
  if (product1.price > product2.price){
    return product1;
  } else {
    return product2;
  }
}
//console.log(comparePrice(product1, product2));


function isSameProduct(product1, product2){
  return (
    product1.name===product2.name &&
    product1.price===product2.price
  );
}
console.log(isSameProduct(product1, product2));
console.log(isSameProduct(product3, product2));

console.log('test'.repeat(2));
*/