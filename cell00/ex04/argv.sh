#!/bin/bash  
# Se houver argumentos, ele entrará em um loop e imprimirá cada argumento, até um máximo de 3 argumentos. Se mais de 3 argumentos forem fornecidos, ele ignorará o restante após o terceiro.
# Para executar este script no PowerShell, use o comando: bash argv.sh argumento1 argumento2 argumento3

# Verifica se nenhum argumento foi fornecido
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Inicializa um contador de argumentos
    argument_count=0

    # Loop através dos argumentos fornecidos
    for argument in "$@"; do
        # Imprime o argumento atual
        echo "$argument"

        # Incrementa o contador de argumentos
        argument_count=$((argument_count + 1))

        # Se o contador de argumentos atingir 3, sai do loop
        if [ $argument_count -eq 3 ]; then
            break
        fi
    done
fi