import * as constants from "./constants.js";

interface TodoInterface {
    todo: string;
}

export class Todo implements TodoInterface {
    constructor (public todo: string) {}
    
    addItem() {
        return `${this.todo}`;
    }
}


constants.INPUT_FORM.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault(); 
    const todo = new Todo(constants.INPUT_TODO.value);
    constants.TODO_LIST.appendChild(document.createElement('li')).textContent=todo.addItem();
    constants.INPUT_FORM.reset();
})
