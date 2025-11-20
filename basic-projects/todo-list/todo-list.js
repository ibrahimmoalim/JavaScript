function onKeyDown(e){
  if (e.key === 'Enter'){
    addTodo()
  }
}

let todos = JSON.parse(localStorage.getItem('todos')) || []

const inputElement = document.getElementById("input")
const divElement = document.querySelector('.js-div')


function addTodo(){
  const addInput = inputElement.value
  const date = document.getElementById("date-input").value

  if (addInput.length && !date.length) return alert('Please, select a date');

  // get today's date, ignore time
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  //turn date from string to date object
  const selectedDate = new Date(date)
  
  
  if (addInput.length){

    if (today > selectedDate){
      return alert('Date is passed, please select a Future date.');
    }

    const newTodo = {name: addInput, date: date}
    todos.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(todos))

    renderTodos();
    
    inputElement.value = '';
  }
}

function renderTodos(){
  divElement.innerHTML = ''
  
  todos.forEach(function(value, index){
    divElement.innerHTML += `
      <p class="js-par">
      <span class="todo-name">${value.name}</span>
      <span class="due-date">${value.date}</span>
      <button class="remove-but" onclick="
        removeTodo(${index});
      ">Remove
      </button>
    </p>
    `;
  })
}

function removeTodo(index){
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}
renderTodos()