// let calc=JSON.parse(localStorage.getItem('calc')) || ''
let calc = ''

const  formula = document.querySelector('.js-formula')
const answer = document.querySelector('.js-result')

function calculate(value){
  if (value === '%'){
    calc /= 100
  } else {
    calc+= value;
  }
  formula.innerHTML = calc
  // localStorage.setItem('calc', JSON.stringify(calc));
}

let haveResult = false;
function result(){
  answer.innerHTML = Number(calc).toFixed(2);
  haveResult = true;
}

function util(){
  haveResult =false;
}

function addSpecialLetter(Pi){
  formula.innerHTML += ` ${Pi}`
}

function addSquare(){
  formula.innerHTML += `<sup>2</sup>`
}

function clearPrevFormula(){
  if (haveResult){
    calc = ''
    haveResult = false;
  }
}

function clearScreen(){
  calc='';
  localStorage.removeItem('calc');
  answer.innerHTML = '';
  formula.innerHTML = '';
}