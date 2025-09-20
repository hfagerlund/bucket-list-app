"use strict";

const inputTodo = document.querySelector('#todo');
const inputForm = document.querySelector('form');
const todo_list = document.querySelector('#todo_list');
class Todo {
    constructor(todo) {
        this.todo = todo;
    }
    addItem() {
        return `${this.todo}`;
    }
}
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = new Todo(inputTodo.value);
    todo_list.appendChild(document.createElement('li')).textContent = todo.addItem();
    inputForm.reset();
});
