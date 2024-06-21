$(document).ready(function() {
    console.log("Document is ready"); // Indica que o DOM está completamente carregado e pronto para ser manipulado.

    const taskList = $('#ft_list'); // Seleciona o elemento com id 'ft_list' que conterá a lista de tarefas.

    loadTasks(); // local de armazenamento (qdo a pág. é carregada).
    // Adiciona um evento de clique ao botão com id 'addTaskBtn' para adicionar uma nova tarefa.
    $(document).on('click', '#addTaskBtn', function() {
        console.log("Add Task button clicked"); // Log quando o botão de adicionar tarefa é clicado.
        const task = prompt("Nova tarefa:"); // Abre uma caixa de diálogo para o usuário inserir uma nova tarefa
        if (task && !isTaskDuplicate(task)) { // Verifica se a tarefa não está vazia e se não é repetida.
            console.log("Adding task:", task); // Log da tarefa que está sendo adicionada.
            addTaskToDOM(task); // Adiciona a tarefa ao DOM
            saveTasks(); // Salva as tarefas no localStorage.
        } else if (!task) {
            alert("A tarefa não pode estar vazia.");
        } else {
            alert("A tarefa já existe.");
        }
    });

    /**
     * Carrega tarefas do localStorage e adiciona ao DOM. O DOM (Document Object Model) é uma interface de programação para documentos HTML, XML e SVG. Ele representa a estrutura de um documento como uma árvore de nós, onde cada nó representa parte do documento, como elementos HTML, atributos, texto e outros elementos.
     */
    function loadTasks() {
        console.log("Loading tasks from localStorage"); // Log quando as tarefas estão sendo carregadas do localStorage
        const tasks = localStorage.getItem('tasks'); // Obtém as tarefas armazenadas no localStorage
        if (tasks) {
            const taskArray = JSON.parse(tasks); // Converte a string JSON em um array de tarefas
            taskArray.forEach(task => {
                addTaskToDOM(task); // Adiciona cada tarefa ao DOM
            });
        }
    }

    /**
     * Salva as tarefas atuais no localStorage
     */
    function saveTasks() {
        console.log("Saving tasks to localStorage"); // Log quando as tarefas estão sendo salvas no localStorage
        const tasks = [];
        $('.task').each(function() {
            tasks.push($(this).text()); // Adiciona o texto de cada tarefa ao array de tarefas
        });
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Salva o array de tarefas no localStorage como uma string JSON
    }

    /**
     * Adiciona uma nova tarefa ao DOM e associa o evento de clique para remover a tarefa
     * @param {string} task - A tarefa a ser adicionada
     */
    function addTaskToDOM(task) {
        console.log("Adding task to DOM:", task); // Log da tarefa que está sendo adicionada ao DOM
        const taskDiv = $('<div></div>').addClass('task').text(task).click(removeTask); // Cria um novo elemento div com a classe 'task' e adiciona o evento de clique para remover a tarefa
        taskList.prepend(taskDiv); // Adiciona a nova tarefa ao início da lista de tarefas
    }

    /**
     * Remove uma tarefa do DOM e atualiza as tarefas no localStorage
     */
    function removeTask() {
        if (confirm("Deseja remover esta tarefa?")) { // Pede confirmação ao usuário antes de remover a tarefa
            console.log("Removing task:", $(this).text()); // Log da tarefa que está sendo removida
            $(this).remove(); // Remove o elemento de tarefa do DOM
            saveTasks(); // Atualiza as tarefas no localStorage
        }
    }

    /**
     * Verifica se a tarefa já existe na lista de tarefas
     * @param {string} task - A tarefa a ser verificada
     * @returns {boolean} - Retorna true se a tarefa for duplicada, false caso contrário
     */
    function isTaskDuplicate(task) {
        let isDuplicate = false;
        $('.task').each(function() {
            if ($(this).text() === task) {
                isDuplicate = true; // Define como duplicada se o texto da tarefa coincidir com o texto da tarefa existente
                return false; // Sai do loop each
            }
        });
        return isDuplicate;
    }
});
