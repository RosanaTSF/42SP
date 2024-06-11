
// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF'; // Letras e números que compõem o formato hexadecimal
    let color = '#'; // Inicia a cor com o símbolo #
    for (let i = 0; i < 6; i++) { // Loop para gerar 6 caracteres
        color += letters[Math.floor(Math.random() * 16)]; // Adiciona um caractere aleatório de 0-9 ou A-F
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = getRandomColor(); // Gera uma nova cor aleatória
    document.body.style.backgroundColor = newColor; // Aplica a nova cor como fundo da página
}

