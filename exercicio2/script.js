const manipulandostrings = (minhaString) => {

  let minhaStringcarcteresAntes = minhaString.length;
  let minhaStringNova = minhaString.trim();
  let minhaStringcarcteresDepois = minhaString.length;
  minhaStringNova = minhaString.replace("________", "sticioso");

  return console.log(`${minhaStringNova}\n\n Caracteres Antes da mudança ${minhaStringcarcteresAntes} e depois da mudança ${minhaStringcarcteresDepois}`);

}

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

manipulandostrings(minhaString);
