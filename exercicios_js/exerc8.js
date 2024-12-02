function ordenarDecrescente(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => b - a);
    console.log(numeros.join(', '));
  }

  ordenarDecrescente(15, 52, 19); 