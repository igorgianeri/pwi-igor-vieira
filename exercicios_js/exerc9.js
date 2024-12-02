function calcularIMC() {

    const peso = parseFloat(prompt("Digite seu peso em kg:"));
    const altura = parseFloat(prompt("Digite sua altura em metros:"));

    const imc = peso / (altura ** 2);

    let condicao;
    if (imc < 18.5) {
      condicao = "Abaixo do peso";
    }
    if (imc >= 18.5 && imc <= 24.9) {
      condicao = "Peso ideal (parabéns)";
    } 
    if (imc >= 25 && imc <= 29.9) {
      condicao = "Levemente acima do peso";
    }
    if (imc >= 30 && imc <= 34.9) {
      condicao = "Obesidade grau I";
    }
    if (imc >= 35 && imc <= 39.9) {
      condicao = "Obesidade grau II (severa)";
    } else {
      condicao = "Obesidade grau III (mórbida)";
    }

    console.log("Seu IMC é:", imc.toFixed(2));
    console.log("Sua condição é:", condicao);
  }
  
  calcularIMC();