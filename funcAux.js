const readline = require('readline');

function gerarEstados(Movimentos) {
    const moves = [
        "U", "U'", "U2",
        "D", "D'", "D2",
        "L", "L'", "L2",
        "R", "R'", "R2",
        "F", "F'", "F2",
        "B", "B'", "B2"
    ];

    const estados = [];

    for (const move of moves) {

        const novoEstado = Movimentos.trim() + " " + move;
        estados.push(novoEstado.trim());
    }

    return estados;
}

function escolherAleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

function perguntar(texto) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(texto, (resposta) => {
      rl.close();
      resolve(resposta);
    });
  });
}

module.exports = { gerarEstados, escolherAleatorio, perguntar};