$(document).ready(function() {
    // Carrega tarefas salvas ao carregar a página
    loadTasks();

    // Adiciona evento ao botão de adicionar tarefa
    $('#addTaskBtn').click(function() {
        addTask();
    });

    // Função para carregar tarefas do cookie
    function loadTasks() {
        const tasks = getCookie('tasks');
        if (tasks) {
            const taskList = JSON.parse(tasks);
            taskList.forEach(task => {
                addTaskToDOM(task);
            });
        }
    }

    // Função para salvar tarefas no cookie
    function saveTasks() {
        const tasks = [];
        $('.task').each(function() {
            tasks.push($(this).text());
        });
        setCookie('tasks', JSON.stringify(tasks), 7);
    }

    // Função para adicionar tarefa ao DOM
    function addTaskToDOM(task) {
        const taskDiv = $('<div class="task"></div>').text(task);
        taskDiv.click(function() {
            removeTask($(this));
        });
        $('#ft_list').prepend(taskDiv);
        saveTasks();
    }

    // Função para adicionar nova tarefa
    function addTask() {
        const task = prompt("Nova tarefa:");
        if (task) {
            addTaskToDOM(task);
        }
    }

    // Função para remover tarefa
    function removeTask(taskDiv) {
        if (confirm("Deseja remover esta tarefa?")) {
            taskDiv.remove();
            saveTasks();
        }
    }

    // Funções para manipulação de cookies
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
});