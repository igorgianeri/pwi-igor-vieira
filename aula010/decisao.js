const meuPrimeiroIf = (n) => {
    if (n > 5) {
        return `${n} é maior que 5`
    }
    if (n == 5) {
        return `${n} é igual a 5`
    }
    return `${n} é menor que 5`
}

console.log(meuPrimeiroIf(6));
console.log(meuPrimeiroIf(2));
console.log(meuPrimeiroIf(5));

// const meuPrimeiroIf = (n) => {
//     if (n >= 5) {
//         return `${n} é maior que 5`
//     }
//     else {
//         return `${n} é menor que 5`
//     };
// };

// const meuPrimeiroIf = (n) => {
//     if (n > 5) {
//         return `${n} é maior que 5`
//     }
//     else if (n == 5) {
//         return `${n} é igual a 5`
//     }
//     else {
//         return `${n} é menor que 5`
//     }
// };

const bilhete = (n) => {
    if (n > 4.90) {
        return `Seu bilhete ainda tem saldo`
    }
    if ( n == 4.90) {
        return `Só te resta saldo para uma passagem`
    }
    return `Seu bilhete precisa de recarga`
}

console.log(bilhete (4.90));
console.log(bilhete (20));
console.log(bilhete (2));