//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"";

const mudaFrase = (frase) => {

  let fraseNova = frase.replaceAll("verde", "rosa", "azul");
  fraseNova = frase.replaceAll("azul", "laranja");

  let verifica = fraseNova.includes("rosa" && "laranja");

  fraseNova = fraseNova.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");

  return console.log(`${fraseNova}\n ${verifica}`)
}

mudaFrase(frase);