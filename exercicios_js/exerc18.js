let alturaFrancisco = 1.50; 
let alturaSara = 1.10; 
let crescimentoFrancisco = 0.02; 
let crescimentoSara = 0.03; 
let anos = 0;

while (alturaFrancisco <= alturaSara) {
    alturaFrancisco += crescimentoFrancisco;
    alturaSara += crescimentoSara;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que Francisco seja maior que Sara.`);
