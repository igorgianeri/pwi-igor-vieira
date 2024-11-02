function soma () {
    return 2 + 5;
};

console.log(soma ());

function soma2(n1, n2) {
    console.log(
        "O resultado da soma de", n1, '+', n2, 'é:', n1 + n2
    );
};

soma2(5, 9);
soma2(12, 13);

function subtracao(n1, n2) {
    console.log(
        "O resultado da subtraçãp de", n1, "-", n2, "é:", n1 - n2
    );
};

subtracao(10, 5);

function divisao(n1, n2) {
    console.log(
        "O resultado de", n1, "dividido por", n2, "é:", n1 / n2
    );
}

divisao(20, 2);

function multiplicacao (n1, n2){
    console.log(
        "O resultado de", n1, "multiplicado por", n2, "é:", n1 * n2
    );
}

multiplicacao (5, 2);

function potenciacao(n1, n2){
    console.log(
        "O resultado de", n1, "elevado a", n2, "é:", n1 ^ n2
    );
}

potenciacao (9, 2); 

const potencia = (x, y) => {
    let result = x ^ y;
    return `${x} elevado a ${y} é igual a ${result}`;
}

console.log(potencia(2,0));