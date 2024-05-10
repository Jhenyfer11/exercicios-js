
// Exercício 7: Cálculo de desconto progressivo

// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague.
// Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra.
// Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

// valortotal = valortotal - (valortotal * 0.1)

//  500 * 0.16

let valorcompra = parseFloat(prompt("Digite o valor da compra: "));

if (valorcompra <= 100) {
    alert("Sem desconto. ")
}

if (valorcompra > 100 && valorcompra < 200) {
    alert("Desconto de 10% ");

    let percentual = 0.1
    let desconto = valorcompra * percentual % 100
    let valorfinal = valorcompra - desconto

    alert("Desconto adicionado, valor final:" + valorfinal )
}


if (valorcompra > 200) {
    alert("Desconto de 20 %");

    let percentual = 0.2
    let desconto = valorcompra * percentual % 100
    let valorfinal = valorcompra - desconto

    alert("Desconto adicionado, valor final: " + valorfinal)
}

