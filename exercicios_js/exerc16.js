function verificarTriangulo(lado1, lado2, lado3) {
    
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        console.log("Os lados devem ser maiores que zero.");
        return;
    }
    
    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        console.log("Esses lados não formam um triângulo válido.");
        return;
    }

    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
}

let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo: "));
let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo: "));
let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo: "));
    verificarTriangulo(lado1, lado2, lado3);
