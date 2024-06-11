$(document).ready(function() {
    // Função para gerar uma cor aleatória
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Evento de clique no botão
    $('#changeBgBtn').click(function() {
        // Muda a cor de fundo do body para uma cor aleatória
        $('body').css('background-color', getRandomColor());
    });
});

