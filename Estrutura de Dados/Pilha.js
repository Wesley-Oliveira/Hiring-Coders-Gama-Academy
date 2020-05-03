var elementos = [];
var topo      = -1;
const MAX     = 10;

function push(num) {
    if(topo < MAX){
        topo++;
        elementos[topo] = num;
    }
    else {
        console.log("Pilha esta cheia");
    }
}

function estaVazia() {
    return topo == -1;
}

function pop() {
    if(topo != -1) {
        let num = elementos[topo];
        topo--;
        return num;
    } 
    else {
        console.log("Pilha está vazia");
    }
}

// Usando funções para transformar um número em base binária

var numDecimal = 10;
var resto;

while(numDecimal != 0) {
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

while(!estaVazia()) {
    console.log(pop());
}
