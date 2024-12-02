function calcularDivisao() {
  const A = parseInt(prompt("Digite o valor de A:"));
  const B = parseInt(prompt("Digite o valor de B:"));

  const quociente = Math.floor(A / B);
  const resto = A % B;

  console.log(`Quociente: ${quociente}`);
  console.log(`Resto: ${resto}`);
}

calcularDivisao();
