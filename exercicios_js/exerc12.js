function valoraserpago(valorproduto, metpagamento) {
    let valortotal = 0
    switch (metpagamento) {
    case "Dinheiro", "Pix" :
        valortotal = valorproduto - (valorproduto * 0.15);
        console.log(`O valor total a ser pago é: R$${valortotal}`);
        break;
    case "Cartão de crédito a vista" :
        valortotal = valorproduto - (valorproduto * 0.10);
        console.log(`O valor total a ser pago é: R$${valortotal}`);
        break;
    case "Parcelado em 2x":
        valortotal = valorproduto;
        console.log(`O valor total a ser pago é: R$${valortotal}`);
        break;
    case "Parcelado em 3x ou mais" :
        valortotal = valorproduto + (valorproduto * 0.10);
        console.log(`O valor total a ser pago é: R$${valortotal}`);
        break;
}
}
valoraserpago (100, "Parcelado em 2x");