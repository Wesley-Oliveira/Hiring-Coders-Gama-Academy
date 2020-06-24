class Data {
    /* Forma padrão de classes, se comparado a outras linguagens como C#, Java
    // public, private
    public dia: number;
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }*/
    
    // Forma que é possível ser utilizada aqui
    constructor(public dia: number, private mes: number, private ano: number = 1970) {
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1); //testando com valor default definido no construtor
console.log(data2);


class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    private alterarvelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    }

    acelerar() {
        this.alterarvelocidade(5);
    }

    frear() {
        this.alterarvelocidade(-5);
    }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();

// Herança
class Camaro extends Carro {
    private turbo = false
    constructor() {
        super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();