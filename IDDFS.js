const Cube = require('cubejs');
const aux = require('./funcAux.js');

Cube.initSolver();

function IDDFS(estadoInicial, limiteMax = 7) {
    const metricas = { nosExpandidos: 0, totalSucessores: 0, memoriaMax: 0 };

    for (let limite = 0; limite <= limiteMax; limite++) {
        const visitados = new Set();
        const resultado = DFSLimitado(estadoInicial, "", limite, metricas, visitados);
        if (resultado !== null) {
            const fator = metricas.totalSucessores / metricas.nosExpandidos;
            console.log("Nós expandidos (IDDFS):", metricas.nosExpandidos); //C4
            console.log("Fator de ramificação médio (IDDFS):", fator.toFixed(2)); //C5
            console.log("Memória estimada (IDDFS):", metricas.memoriaMax); //C3
            return resultado;
        }
    }

    return "Caminho não encontrado";
}

function DFSLimitado(estadoAtual, caminho, limite, metricas, visitados) {
    visitados.add(estadoAtual);
    metricas.memoriaMax = Math.max(metricas.memoriaMax, visitados.size);

    const cubo = Cube.fromString(estadoAtual);
    if (cubo.isSolved()) return caminho.trim();
    if (limite === 0) return null;

    metricas.nosExpandidos++;

    const proximosMovimentos = aux.gerarEstados(caminho);
    metricas.totalSucessores += proximosMovimentos.length;

    for (const prox of proximosMovimentos) {
        const novoCubo = Cube.fromString(estadoAtual);
        const movimento = prox.split(/\s+/).at(-1);
        novoCubo.move(movimento);

        const resultado = DFSLimitado(novoCubo.asString(), caminho + " " + movimento, limite - 1, metricas, visitados);
        if (resultado !== null) return resultado;
    }

    return null;
}


module.exports = IDDFS;
