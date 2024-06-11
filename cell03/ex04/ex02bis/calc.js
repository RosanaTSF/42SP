$(document).ready(function() {
    // Função para calcular o resultado baseado nos operandos e operador fornecidos
    function calculate(leftOperand, operator, rightOperand) {
        switch (operator) {
            case '+':
                return leftOperand + rightOperand;
            case '-':
                return leftOperand - rightOperand;
            case '*':
                return leftOperand * rightOperand;
            case '/':
                if (rightOperand === 0) return "It’s over 9000!";
                return leftOperand / rightOperand;
            case '%':
                if (rightOperand === 0) return "It’s over 9000!";
                return leftOperand % rightOperand;
            default:
                return "Error :(";
        }
    }

    // Adiciona um evento de submit ao formulário
    $('#calculator').submit(function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submit

        // Obtém os valores dos campos de entrada e seleção
        const leftOperand = parseInt($('#leftOperand').val());
        const operator = $('#operator').val();
        const rightOperand = parseInt($('#rightOperand').val());

        // Verifica se os valores são válidos
        if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
            alert("Error :("); // Mostra um alerta de erro
            console.log("Error :("); // Exibe a mensagem de erro no console
            return;
        }

        // Calcula o resultado
        const result = calculate(leftOperand, operator, rightOperand);

        // Verifica se ocorreu divisão ou módulo por zero
        if (result === "It’s over 9000!") {
            alert(result); // Mostra um alerta com a mensagem "It’s over 9000!"
            console.log(result); // Exibe a mensagem "It’s over 9000!" no console
        } else {
            alert("Resultado: " + result); // Mostra um alerta com o resultado do cálculo
            console.log("Resultado: " + result); // Exibe o resultado do cálculo no console
        }
    });

    // Função para mostrar o alerta "Please, use me..." a cada 30 segundos
    setInterval(function() {
        alert("Please, use me...");
    }, 30000); // 30 segundos = 30000 milissegundos
});
