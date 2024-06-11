$(document).ready(function() {
    // Define o tamanho inicial do balão
    let balloonSize = 200;

    // Array de cores para mudança
    const colors = ['red', 'green', 'blue'];

    // Índice inicial para as cores
    let colorIndex = 0;

    // Função para aumentar o tamanho do balão ao clicar
    $('#balloon').on('click', function() {
        balloonSize += 10; // Aumenta o tamanho em 10px
        $(this).css({
            width: balloonSize + 'px', // Atualiza a largura do balão
            height: balloonSize + 'px', // Atualiza a altura do balão
            backgroundColor: colors[colorIndex] // Atualiza a cor do balão
        });
        colorIndex = (colorIndex + 1) % colors.length; // Atualiza o índice da cor

        // Verifica se o tamanho do balão é maior que 420px
        if (balloonSize > 420) {
            balloonSize = 200; // Redefine o tamanho para 200px
            $(this).css({
                width: balloonSize + 'px', // Atualiza a largura do balão
                height: balloonSize + 'px' // Atualiza a altura do balão
            });
        }
    });

    // Função para diminuir o tamanho do balão ao sair do mouse
    $('#balloon').on('mouseout', function() {
        balloonSize = Math.max(200, balloonSize - 5); // Diminui o tamanho em 5px, mas não menos que 200px
        $(this).css({
            width: balloonSize + 'px', // Atualiza a largura do balão
            height: balloonSize + 'px', // Atualiza a altura do balão
            backgroundColor: colors[(colorIndex - 1 + colors.length) % colors.length] // Atualiza a cor do balão na ordem inversa
        });
        colorIndex = (colorIndex - 1 + colors.length) % colors.length; // Atualiza o índice da cor na ordem inversa
    });
});
