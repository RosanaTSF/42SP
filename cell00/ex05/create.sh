#!/bin/bash.

# Se houver argumentos, ele entrará em um loop e para cada argumento, 
# ele tentará criar um diretório chamado "ex" seguido pelo argumento. 
# Se o diretório já existir, ele imprimirá "Directory ex{arg} already exists.", 
# caso contrário, ele criará o diretório e imprimirá "Directory ex{arg} created.".
# Para executar este script no PowerShell, use o comando: bash create.sh argumento1 argumento2 argumento3

# Verifica se nenhum argumento foi passado
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop através dos argumentos fornecidos
    for arg in "$@"; do
        # Cria o nome do diretório
        dir_name="ex$arg"

        # Verifica se o diretório já existe
        if [ ! -d "$dir_name" ]; then
            # Cria o diretório
            mkdir "$dir_name"
            echo "Directory $dir_name created."
        else
            echo "Directory $dir_name already exists."
        fi
    done
fi