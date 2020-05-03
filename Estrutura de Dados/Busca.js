var valores = [5, 8, 10, 22, 38, 45, 60, 70, 80, 90];

function busca(num) {
    for (i = 0; i < 6; i++) {
        if(num == valores[i]) {
            return i;
        }
    }
    return -1;
}

function buscaBin(num) {
    let inicio, fim, meio;
    inicio = 0;
    fim = 9;

    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        if (num == valores[meio]) {
            return meio;
        } else {
            if (num > valores[meio]) {
                inicio = meio +1;
            } else {
                fim = meio -1;
            }
        }
    }
    return -1;
}

// Usando a função

console.log(buscaBin(10));
console.log(buscaBin(50));
console.log(buscaBin(60));