#!/bin/bash

# Verifica a quantidade de argumentos
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop através dos argumentos, mas só até um máximo de 3
    count=0
    for arg in "$@"; do
        echo "$arg"
        count=$((count + 1))
        if [ $count -eq 3 ]; then
            break
        fi
    done
fi
