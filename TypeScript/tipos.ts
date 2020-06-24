// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Teste';

// Array
const idades: number[] = [12, 23, 34, 45, 56];
const idades2: Array<number> = [23, 345, 456, 567];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['teste', 1, true];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, 'teste', false];
const retornoDaAPI2: any = { /* objeto aqui */ };

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objecto: object) {
    // ...
}
criar({
    propriedade: 1,
});

// Never
function loopInfinito(): never {
    while (true) {

    }
}

function erro (msg: string): never {
    throw new Error(msg);
}

function falha() {
    return erro('Algo falhou');
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);