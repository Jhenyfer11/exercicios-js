// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana 
// e exibe o nome correspondente a esse dia.
//Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

let diadaSemana = prompt("Digite um número de 1 a 7 para representar um dia da semana. Lembrando que 1 representa segunda-feira, 2 representa terça-feira e assim por diante. ")

switch (diadaSemana) {

    case "1":
        console.log("Segunda-feira");
        break;

    case "2":
        console.log("Terça-feira");
        break;

    case "3":
        console.log("Quarta-feira");
        break;


    case "4":
        console.log("Quinta-feira");
        break;

    case "5":
        console.log("Sexta-feira");
        break;


    case "6":
        console.log("Sabado");
        break;


    case "7":
        console.log("Domingo");
        break;
}