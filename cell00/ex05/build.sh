#!/bin/bash

# Verifica se nenhum argumento foi passado
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop através dos argumentos fornecidos
    for arg in "$@"; do
        dir_name="ex$arg"
        # Verifica se o diretório já existe
        if [ ! -d "$dir_name" ]; then
            mkdir "$dir_name"
            echo "Directory $dir_name created."
        else
            echo "Directory $dir_name already exists."
        fi
    done
fi
