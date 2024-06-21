document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton'); // Botão para adicionar tarefas
    const taskInput = document.getElementById('taskInput'); // Campo de entrada para novas tarefas
    const taskList = document.getElementById('taskList'); // Lista onde as tarefas são exibidas

    // Função para adicionar tarefa
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            // Cria o elemento da tarefa
            const taskItem = document.createElement('div');
            taskItem.className = 'task';

            // Adiciona o texto da tarefa
            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;
            taskItem.appendChild(taskContent);

            // Botão de remover
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                taskItem.remove();
            };
            taskItem.appendChild(removeButton);

            // Botão de editar
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = function() {
                const newText = prompt('Edit the task:', taskContent.textContent);
                if (newText) {
                    taskContent.textContent = newText;
                }
            };
            taskItem.appendChild(editButton);

            // Adiciona a tarefa à lista
            taskList.appendChild(taskItem);

            // Limpa o campo de entrada
            taskInput.value = '';
        }
    }

    // Evento para adicionar tarefa
    addButton.addEventListener('click', addTask);

    // Opcional: Adicionar tarefa com Enter
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});