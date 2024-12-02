// Loop para percorrer os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    // Para cada número de 1 a 10, imprime a tabuada
    console.log(`Tabuada do ${i}:`);
    
    // Loop para percorrer os multiplicadores de 1 a 10
    for (let j = 1; j <= 10; j++) {
        // Imprime o resultado da multiplicação
        console.log(`${i} x ${j} = ${i * j}`);
    }

    // Imprime uma linha em branco para separar as tabuadas
    console.log(''); 
}
