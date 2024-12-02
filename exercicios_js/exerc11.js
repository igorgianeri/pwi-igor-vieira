function calcmedia(nome, nota1, nota2, nota3, nota4) {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
      console.log(`${nome} foi aprovado(a)!`);
    } else {
      console.log(`${nome} foi reprovado(a).`);
    }
  }
  
  const nomeAluno = "João";
  calcmedia(nomeAluno, 8, 7, 6, 9);