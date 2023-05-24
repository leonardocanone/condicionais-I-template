// Aula Condicionais - Parte 1

// Prática guiada

// if e if/else

const booleano1 = true
const booleano2 = false

if (booleano1){

    // alert("booleano1 é true"); 
    console.log("booleano1 é true");
}else{
    // alert("booleano1 não é true");
    console.log("booleano1 não é true");
}

// if e else/if
const booleano3 = true

if (booleano1 === booleano2){

    console.log("booleano1 é igual a booleano2");

}else if (booleano2 === booleano3){

    console.log("booleano2 é igual a booleano3");

}else if (booleano1 === booleano3){

    console.log("booleano1 é igual a booleano3");

}else {
    
    console.log("Nemhum valor é igual a outro!");
}

// if/else if/else (if else encadeado)

let idade = 16

if ((idade >= 18) && (idade <70)) {

    console.log("Tem 18 anos ou mais, então pode votar nas eleições!");

}else if ((idade === 16) || (idade === 17)) {
    
    console.log("Tem entre 16 e 17 anos, então o voto é facultativo!");
    
}else if (idade >= 70) {
    
    console.log("Tem 70 anos ou mais, então o voto é facultativo!");

}else {

    console.log("Tem menos de 16 anos, não pode votar!");
}
// (idade < 16)
// Fim da prática guiada

// Exercício de fixação

// no primeiro exemplo abaixo, montamos a lógica de uma maneira bem simples, e a proposta do exercício ficou correta, porém no exemplo seguinte, reforçamos as regras para considerar inválidos os dados como média 11 ou -1.
let media = 4

if (media >=5) {

    console.log("Parabéns! Você foi aprovado.");

}else if (media >=3){

    console.log("Você está de Recuperação!");

}else if (media < 3){

    console.log("Que pena! Você foi reprovado.");

}else {

    console.log("Dado inválido!");
}

// resolução abaixo agora com regras mais robustas invalidando dados acima de 10 ou números negativos.
let media2 = 11

if ((media2 >= 5) && (media2 <= 10)) {

    console.log("Parabéns! Você foi aprovado.");

}else if ((media2 >= 3) && (media2 < 5)){

    console.log("Você está de Recuperação!");

}else if ((media2 < 3) && (media2 >= 0)) {

    console.log("Que pena! Você foi reprovado.");

}else {

    console.log("Dado inválido!");
}

// Abaixo um Reforço sobre a questão dos sinais de igual nos operadores relacionais (Comparadores).

// ( 1 sinal de = ) abaixo o sinal de igual chamamos de ATRIBUIÇÃO:
let soma = 1 + 1
console.log(soma);

// ( 2 sinais de == ) aqui comparamos apenas valores, segue o exemplo abaixo:
let verificaApenasValor = 2 == "2"
console.log(verificaApenasValor);
// No console o resultado é true, porque os dois sinais de igual compara apenas o valor, desprezando que um é Number e o outro é String.

// ( 3 sinais de === ) aqui por fim comparamos tudo, ou seja, valor e o tipo:
let verificaValorEtipo = 2 === "2"
console.log(verificaValorEtipo);
// Aí sim neste caso o resultado no console é false, pois apesar de passar no valor, ele conflita no tipo, como já mencionamos no exemplo acima. 



