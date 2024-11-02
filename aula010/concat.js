let msg = "Hello";
let nmbr = 3;

// Formas de se contatenar

console.log(msg, "para os", nmbr, "alunos da sala");
console.log(msg + " para os " + nmbr + " alunos da sala");
console.log(`${msg} para os ${nmbr} alunos da sala`);
let msgfinal = msg.concat(' para os ', nmbr, ' alunos da sala');
console.log(msgfinal);