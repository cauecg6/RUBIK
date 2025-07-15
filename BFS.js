const Cube = require('cubejs');
const aux = require('./funcAux.js');

Cube.initSolver();

function BFS(estadoInicial) {
    const fila = [[estadoInicial, ""]];
    const visitados = new Set();

    let nosExpandidos = 0;
    let totalSucessores = 0;
    let memoriaMax = 0;

    while (fila.length !== 0) {
        const [estadoAtual, caminho] = fila.shift();

        if (visitados.has(estadoAtual)) continue;
        visitados.add(estadoAtual);

        nosExpandidos++;

        const cubo = Cube.fromString(estadoAtual);
        if (cubo.isSolved()) {
            const fatorRamificacao = totalSucessores / nosExpandidos;
            console.log("Nós expandidos (BFS):", nosExpandidos); 
            console.log("Fator de ramificação médio (BFS):", fatorRamificacao.toFixed(2)); 
            console.log("Memória estimada elementos (BFS):", memoriaMax); 
            return caminho.trim();
        }

        const proximosMovimentos = aux.gerarEstados(caminho);
        totalSucessores += proximosMovimentos.length;

        for (const prox of proximosMovimentos) {
            const novoCubo = Cube.fromString(estadoAtual);
            const novoMovimento = prox.split(/\s+/).at(-1);
            novoCubo.move(novoMovimento);

            const novoCaminho = caminho + " " + novoMovimento;
            fila.push([novoCubo.asString(), novoCaminho.trim()]);
        }

        memoriaMax = Math.max(memoriaMax, fila.length + visitados.size);
    }

    return "Caminho não encontrado";
}


module.exports = BFS;