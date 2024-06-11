$(document).ready(function() {
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
        const taskDiv = $('<div></div>').addClass('task').text(task).click(removeTask);
        $('#ft_list').prepend(taskDiv);
    }

    // Função para adicionar nova tarefa
    $('#addTaskBtn').click(function() {
        const task = prompt("Nova tarefa:");
        if (task) {
            addTaskToDOM(task);
            saveTasks();
        }
    });

    // Função para remover tarefa
    function removeTask() {
        if (confirm("Deseja remover esta tarefa?")) {
            $(this).remove();
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
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Carrega tarefas salvas ao carregar a página
    loadTasks();
});

