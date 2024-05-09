// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.

let numero = parseInt(prompt("Digite um número: "))

if(numero%2 == 0){
    console.log("esse número é Par. ");
}

else{
    console.log("esse número é impar. ");
}