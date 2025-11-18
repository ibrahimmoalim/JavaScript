function onKeyDown(e){
  if (e.key === 'Enter'){
    addTodo()
  }
}


const inputElement = document.getElementById("input")
const divElement = document.querySelector('.js-div')


function addTodo(){
  const addInput = inputElement.value
  
  const date = document.getElementById("date-input").value

  if (addInput.length && !date.length) return alert('Please, select a due-date');

  // get today's date, ignore time
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  //turn date from string to date object
  const selectedDate = new Date(date)
  
  
  if (addInput.length){

    if (today > selectedDate){
      return alert('Date is passed, please select a Future date.');
    }
    
    divElement.innerHTML += `<p class="js-par">
    <span id="todo-name">${addInput}</span> <span class="due-date">${date}</span>
    <button class="remove-but" onclick="removeTodo(this)" >Remove</button>
    </p>
    `
    inputElement.value = '';
  }

}

function removeTodo(button){
  button.parentElement.remove();
}