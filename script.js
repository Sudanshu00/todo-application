// Using dom selector
const todoItems = document.querySelector('#todo-items');
const addBtn = document.querySelector('#add-button');
const input = document.querySelector('#input-text');
let todoList = [];

let date = document.querySelector('#date-text');

function addTodo() {
  let todoItem = input.value;
  let todoDate = date.value;

  input.value = '';
  date.value = '';

  todoList.push({ item: todoItem, dueDate: todoDate });
  displayTodo();
}

function displayTodo() {
  let viewList = document.querySelector('.todo-items');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newHtml += `
      <div>
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i},1); displayTodo();">
          Delete
        </button>
      </div>
    `;
  }

  viewList.innerHTML = newHtml;
}