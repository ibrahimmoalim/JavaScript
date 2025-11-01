const buttonElement = document.querySelector('.js-button') 
function changeText(){
  if (buttonElement.innerHTML === 'Subscribe'){
      buttonElement.innerHTML = 'Subscribed';
      buttonElement.classList.add('is-subscribed');
    } else {
      buttonElement.innerHTML = 'Subscribe';
      buttonElement.classList.remove('is-subscribed');
    }
}

function hitEnter(){
  if (event.key==='Enter'){
    calc()
  }
}

function calc(){
  let value= document.querySelector('.js-input').value;
  let cost= Number(value);
  if (isNaN(cost) || value===''){
    // ^^ checks whether "cost" is NaN (Not a Number), if true then code below is run.
    document.querySelector('.js-total')
    .innerHTML = `Enter a Number`
    return;
  }
  if (cost===0){
    document.querySelector('.js-total')
    .innerHTML = `$0`
  }
  else if (cost < 40){
    cost+=10;
  }
  Number(document.querySelector('.js-total')
    .innerHTML = `$${cost.toFixed(2)}`)
}