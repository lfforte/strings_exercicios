//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"";
console.log(frase);
const mudaFrase = (frase) => {

  let fraseNova = frase.replace("verde", "rosa");
  let fraseNova1 = fraseNova.replace("azul", "laranja");

  let verifica = fraseNova1.includes("rosa");
  let verifica1 = fraseNova1.includes("laranja");

  fraseNova1 = fraseNova1.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");

  return console.log(`${fraseNova1}\n ${verifica && verifica1}`)
}

mudaFrase(frase);