//função que vai fazer a inversão de string
const InverteString = (palavra) => {
  let novaPalavra = "";
  //recebe a string por parametro e percorre letra a letra com o for
  // palavra.length - 1 -> pega o ultimo caractere da string
  for (let i = palavra.length - 1; i >= 0; i--) {
    //enquanto a palavra é percorrida, a cada indice, é adicionada a letra existente no mesmo.
    novaPalavra += palavra[i];
  }
  return novaPalavra;
};

console.log(InverteString("javascript"));
