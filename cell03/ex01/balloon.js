// Obtém a referência do elemento balão do DOM. 
// O método document.getElementById retorna um objeto que representa o elemento DOM com o ID especificado.
const balloon = document.getElementById('balloon');

// Define o tamanho inicial do balão.
let balloonSize = 200;

const colors = ['yellow', 'white', 'blue'];

let colorIndex = 0;

// Adiciona um ouvinte de evento de clique ao balão. 
// A função passada como argumento será chamada sempre que o balão for clicado.
balloon.addEventListener('click', () => {
    balloonSize += 10; // Aumenta o tamanho do balão em 10px.
    balloon.style.width = balloonSize + 'px'; // Atualiza a largura do balão. O objeto style representa os estilos CSS do elemento.
    balloon.style.height = balloonSize + 'px'; // Atualiza a altura do balão.
    colorIndex = (colorIndex + 1) % colors.length; // Atualiza o índice da cor. O operador % é o operador de módulo, que retorna o resto da divisão.
    balloon.style.backgroundColor = colors[colorIndex]; // Atualiza a cor do balão.

    // Se o tamanho do balão for maior que 420px
    if (balloonSize > 420) {
        alert("O balão estourou!"); // Alerta o usuário de que o balão estourou. A função alert exibe uma caixa de diálogo com uma mensagem.
        balloonSize = 200; // Redefine o tamanho para 200px.
        balloon.style.width = balloonSize + 'px'; 
        balloon.style.height = balloonSize + 'px'; 
    }
});

// Adiciona um ouvinte de evento de saída do mouse ao balão. 
// A função passada como argumento será chamada sempre que o mouse sair do balão.
balloon.addEventListener('mouseout', () => {
    balloonSize = Math.max(200, balloonSize - 5); // Diminui o tamanho em 5px, mas não menos que 200px. A função Math.max retorna o maior dos argumentos.
    balloon.style.width = balloonSize + 'px'; // Atualiza a largura do balão.
    balloon.style.height = balloonSize + 'px'; // Atualiza a altura do balão.
    colorIndex = (colorIndex - 1 + colors.length) % colors.length; // Atualiza o índice da cor em ordem inversa.
    balloon.style.backgroundColor = colors[colorIndex]; // Atualiza a cor do balão.
});