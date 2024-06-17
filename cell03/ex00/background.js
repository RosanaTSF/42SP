/**
 * Gera uma cor aleatória no formato hexadecimal.
 * 
 * O sistema hexadecimal é um sistema numérico de base 16 que usa seis dígitos alfanuméricos: 0-9 e A-F.
 * Uma cor hexadecimal é expressa como um código de seis dígitos precedido por uma hashtag (#).
 * Cada par de dígitos representa um componente de cor: o primeiro par é para vermelho, o segundo par é para verde e o terceiro par é para azul.
 * 
 * A função inicia criando uma string 'letters' contendo todos os caracteres possíveis em uma cor hexadecimal.
 * Em seguida, inicia uma string 'color' com o símbolo '#'.
 * Em seguida, executa um loop 6 vezes (uma vez para cada caractere em uma cor hexadecimal de 6 dígitos).
 * Em cada iteração do loop, adiciona um caractere aleatório de 'letters' à string 'color'.
 * Finalmente, retorna a cor gerada.
 * 
 * @returns {string} A cor gerada no formato hexadecimal.
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Altera a cor de fundo do corpo do documento para uma cor aleatória.
 * 
 * Esta função gera uma nova cor aleatória chamando a função getRandomColor e aplica essa cor como a nova cor de fundo do corpo do documento.
 * 
 * A função inicia chamando 'getRandomColor' para gerar uma nova cor aleatória e armazena essa cor na variável 'newColor'.
 * Em seguida, define a propriedade 'backgroundColor' do estilo do corpo do documento ('document.body.style') como 'newColor'.
 * Isso tem o efeito de alterar a cor de fundo do corpo do documento para a cor aleatória gerada.
 */
function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}