// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente.
// Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));


if (num1 < num2 && num2 < num3){
    console.log("está em ordem crescente");
}
else {
    console.log("não está em ordem crescente");
}


// desafio
//Informe se os n[umero estão em ordem crescente / decrescente / não ordenado