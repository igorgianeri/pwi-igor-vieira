function calcularSalarioLiquido() {
  const valorHora = parseFloat(prompt("Digite o valor da hora aula:"));
  const numAulas = parseInt(prompt("Digite o número de aulas lecionadas no mês:"));
  const percentualINSS = parseFloat(prompt("Digite o percentual de desconto do INSS:"));

  const salarioBruto = valorHora * numAulas;
  const descontoINSS = (salarioBruto * percentualINSS) / 100;
  const salarioLiquido = salarioBruto - descontoINSS;

  console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
}

calcularSalarioLiquido();
