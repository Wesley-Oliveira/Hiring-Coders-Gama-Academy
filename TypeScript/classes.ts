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