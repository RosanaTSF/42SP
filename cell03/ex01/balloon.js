// Seleciona a div do balão
const balloon = document.getElementById('balloon');

// Define o tamanho inicial do balão
let balloonSize = 200;

// Array de cores para mudança
const colors = ['red', 'green', 'blue'];

// Índice inicial para as cores
let colorIndex = 0;

// Função para aumentar o tamanho do balão ao clicar
balloon.addEventListener('click', () => {
    balloonSize += 10; // Aumenta o tamanho em 10px
    balloon.style.width = balloonSize + 'px'; // Atualiza a largura do balão
    balloon.style.height = balloonSize + 'px'; // Atualiza a altura do balão
    colorIndex = (colorIndex + 1) % colors.length; // Atualiza o índice da cor
    balloon.style.backgroundColor = colors[colorIndex]; // Atualiza a cor do balão

    // Verifica se o tamanho do balão é maior que 420px
    if (balloonSize > 420) {
        balloonSize = 200; // Redefine o tamanho para 200px
        balloon.style.width = balloonSize + 'px'; // Atualiza a largura do balão
        balloon.style.height = balloonSize + 'px'; // Atualiza a altura do balão
    }
});

// Função para diminuir o tamanho do balão ao sair do mouse
balloon.addEventListener('mouseout', () => {
    balloonSize = Math.max(200, balloonSize - 5); // Diminui o tamanho em 5px, mas não menos que 400px
    balloon.style.width = balloonSize + 'px'; // Atualiza a largura do balão
    balloon.style.height = balloonSize + 'px'; // Atualiza a altura do balão
    colorIndex = (colorIndex - 1 + colors.length) % colors.length; // Atualiza o índice da cor na ordem inversa
    balloon.style.backgroundColor = colors[colorIndex]; // Atualiza a cor do balão
});