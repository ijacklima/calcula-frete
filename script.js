let produto = prompt("Digite o nome produto a ser enviado");
let endereco = prompt("Digite o endereço de entrega");

function calculaFrete() {
  console.log(`Olá, boas vindas à nossa loja. Já recebemos as informações e iremos mandar o produto:
  ${produto} - para o endereço: ${endereco}. Obrigada :)`);
}

calculaFrete()

