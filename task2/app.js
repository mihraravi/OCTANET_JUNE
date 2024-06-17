// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.innerHTML = '✓';
            completeButton.classList.add('complete-btn');
            completeButton.addEventListener('click', () => {
                todoItem.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '✗';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(taskSpan);
            todoItem.appendChild(completeButton);
            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);

            input.value = '';
            input.focus();
        }
    }
});
