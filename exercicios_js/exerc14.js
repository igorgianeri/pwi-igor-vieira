function trocarValores(a, b) {
    let temp = a;
    a = b;
    b = temp;
  
    console.log("Novo valor de A:", a);
    console.log("Novo valor de B:", b);
  }
  
  trocarValores(10, 5);