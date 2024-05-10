// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. 
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let idade = parseInt(prompt("Digite seu ano de nascimento: "));

if (idade <= 2006) {
    console.log("Maior de idade")
}

else {
    console.log("Menor de idade")
}