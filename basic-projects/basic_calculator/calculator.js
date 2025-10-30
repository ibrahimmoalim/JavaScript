let calc=JSON.parse(localStorage.getItem('calc')) || ''

function calculate(value){
  calc+= value;
  document.querySelector('.js-formula').innerHTML = calc
  localStorage.setItem('calc', JSON.stringify(calc));
}

function result(){
  document.querySelector('.js-result').innerHTML = calc.toFixed(2);
}

function clearScreen(){
  calc='';
  localStorage.removeItem('calc');
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-formula').innerHTML = '';
}