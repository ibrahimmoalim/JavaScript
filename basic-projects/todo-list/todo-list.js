function keyDown(){
  if (event.key==='Enter'){
    todoAdd()
  }
}


const todoList = [{
  name:'',
  dueDate:''
}];

displayTodoList()

function displayTodoList(){
  let todoListHTML='';

  for(let i=0; i<todoList.length; i++){
    const todoObject= todoList[i]
    //const name= todoObject.name
    //const dueDate= todoObject.dueDate
    const {name,dueDate}= todoObject
    const html = `<p>
                    ${name} ${dueDate}
                    <button onclick="
                      todoList.splice(${i},1);
                      displayTodoList()
                    ">Delete</button>
                  </p>`;
    todoListHTML+= html; 
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function todoAdd(){
  const inputElement= document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement= document.querySelector('.js-due-date');
  const dueDate= dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  
  inputElement.value = ''
  displayTodoList()
}