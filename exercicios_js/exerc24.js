function calcularCombustivel() {
  const tempoViagem = parseFloat(prompt("Digite o tempo de viagem em horas:"));
  const velocidadeMedia = parseFloat(prompt("Digite a velocidade média do carro em km/h:"));
  
  const distancia = tempoViagem * velocidadeMedia; // Distância = tempo * velocidade
  const litrosConsumidos = distancia / 12; // O carro faz 12 km por litro

  console.log(`Distância percorrida: ${distancia} km`);
  console.log(`Quantidade de litros utilizados: ${litrosConsumidos.toFixed(2)} litros`);
}

calcularCombustivel();
