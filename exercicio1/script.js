function imprimirComidasFavoritas() {

  const nomeUsuario = prompt("Digite seu nome: ");
  const comidaFavorita1 = prompt("Digite uma comida favorita: ");
  const comidaFavorita2 = prompt("Digite outra comida favorita: ");
  const comidaFavorita3 = prompt("Digite outra comida favorita: ");

  return console.log(`Estas são as comidas favoritas de ${nomeUsuario}:\n -${comidaFavorita1}\n -${comidaFavorita2}\n -${comidaFavorita3}`);

}

imprimirComidasFavoritas();