function imprimirTabuada(numero) {
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
let numero = parseInt(prompt("Digite um número inteiro para ver sua tabuada:"));
imprimirTabuada(numero);
