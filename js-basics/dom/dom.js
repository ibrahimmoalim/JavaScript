/*
document.body.innerHTML='hello'
document.title='hi buddy'
*/

/*
document.body.innerHTML=`
  <button title="hello there!"style="cursor:pointer;"> hello </button>
  <hr>
  <h2>header</h2>
  <p>this is a <strong><em>paragraph</em></strong></p>
`;
*/
/*
console.log(document.querySelector('button').innerHTML);
document.querySelector('button')
  .innerHTML= 'brat';

const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);
*/

function search() {
  let textInput = document.querySelector('input');
  if (textInput.value === 'porn'
    || textInput.value === 'nudes'
    || textInput.value === 'sex'
    || textInput.value === 'naked'
  ) {
    textInput.value = ''
    alert('Haram')
  }
}

function keyUp() {
  let type = document.querySelector('.js-input')

  let mirror = document.querySelector('.js-mirror')

  mirror.innerHTML = type.value
}