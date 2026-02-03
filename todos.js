const addTodoBtn = document.querySelector('.todo-add-btn');
const todoInput = document.querySelector('#todoInput');
const todosList = document.querySelector('.todos-list');

let todos = ["FUCK U"];

todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : todos;

todos.forEach(t => {
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = t;
    todosList.appendChild(todo);
});

addTodoBtn.addEventListener('click', () => {
    addTodo();
});



function addTodo() {
    if(todoInput.value.trim() === '') return;
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = todoInput.value;
    todos.push(todoInput.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = '';
    todosList.appendChild(todo);
}