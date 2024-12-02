function fahrenheitParaCelsius(fahrenheit) {
    let celsius = (5 * (fahrenheit - 32)) / 9;
    return celsius;
}

let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
let celsius = fahrenheitParaCelsius(fahrenheit);
console.log(`${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`);
