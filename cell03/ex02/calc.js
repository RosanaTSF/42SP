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
            // Verifica se o divisor é zero
            if (rightOperand === 0) return "Não é possível dividir por zero!";
            return leftOperand / rightOperand;
        case '%':
            // Verifica se o divisor é zero
            if (rightOperand === 0) return "Não é possível dividir por zero!";
            return leftOperand % rightOperand;
        default:
            return "Operador inválido!";
    }
}

// Adiciona um evento de submit ao formulário
document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit

    // Obtém os valores dos campos de entrada e seleção
    const leftOperand = parseInt(document.getElementById('leftOperand').value);
    const operator = document.getElementById('operator').value;
    const rightOperand = parseInt(document.getElementById('rightOperand').value);

    // Verifica se os valores são válidos
    if (isNaN(leftOperand) || isNaN(rightOperand)) {
        alert("Por favor, insira números válidos!"); // Mostra um alerta de erro
        return;
    }

    // Calcula o resultado
    const result = calculate(leftOperand, operator, rightOperand);

    // Verifica se ocorreu divisão ou módulo por zero
    if (result === "Não é possível dividir por zero!") {
        alert(result); // Mostra um alerta com a mensagem de erro
    } else {
        alert("Resultado: " + result); // Mostra um alerta com o resultado do cálculo
    }
});