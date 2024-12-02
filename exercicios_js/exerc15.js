
function calcularIdade(nascimento) {
    
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth(); 
    const diaAtual = dataAtual.getDate();

    let anos = anoAtual - nascimento;
    let meses = mesAtual + 1; 
    let dias = diaAtual;

    
    if (meses <= 0) {
        meses += 12;
        anos--;
    }
    if (dias <= 0) {
        dias += 30;
        meses--;
    }

    console.log(`${anos} anos, ${meses} meses e ${dias} dias de vida.`);
}

const anoNascimento = prompt("Digite o ano de seu nascimento: ");
calcularIdade(parseInt(anoNascimento));
