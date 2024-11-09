const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
console.log (cars[3]);
let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i];
    console.log(`Agora foi colocado o ${cars[i]} na variável text`)
}
console.log(text);
console.log('-----------------------------------------------------');
console.log('-----------------------------------------------------');
console.log('-----------------------------------------------------');

cars.forEach ((car, i) => {
    console.log(`O carro ${car} está na posição ${1} do array`)
})

