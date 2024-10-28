const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('task-text');
        taskTextElement.textContent = taskText;
        taskItem.appendChild(taskTextElement);

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskButtons.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newText = prompt('Enter new task text:', taskText);
            if (newText !== null) {
                taskTextElement.textContent = newText;
            }
        });
        taskButtons.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskButtons.appendChild(deleteButton);

        taskItem.appendChild(taskButtons);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});