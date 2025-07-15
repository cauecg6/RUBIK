const Cube = require('cubejs');
const aux = require('./funcAux.js');
const MinHeap = require('./minHeap.js')

Cube.initSolver();

function heuristicaPeçasErradas(cubo) {
    const resolvido = new Cube().asString();
    const atual = Cube.fromString(cubo).asString();

    let erros = 0;
    for (let i = 0; i < resolvido.length; i++) {
        if (resolvido[i] !== atual[i]) erros++;
    }

    return Math.floor(erros / 8);
}

function AEstrela(estadoInicial) {
    const prioridade = new MinHeap();
    const visitados = new Map();

    let nosExpandidos = 0;
    let totalSucessores = 0;
    let memoriaMax = 0;

    const hInicial = heuristicaPeçasErradas(estadoInicial);
    prioridade.push({
        estado: estadoInicial,
        caminho: "",
        g: 0,
        h: hInicial,
        f: hInicial
    });
    visitados.set(estadoInicial, 0);

    while (!prioridade.isEmpty()) {
        const atual = prioridade.pop();

        const cubo = Cube.fromString(atual.estado);
        if (cubo.isSolved()) {
            const fatorRamificacao = totalSucessores / nosExpandidos;
            console.log("Nós expandidos (A*):", nosExpandidos); 
            console.log("Fator de ramificação médio (A*):", fatorRamificacao.toFixed(2)); 
            console.log("Memória estimada (A*):", memoriaMax); 
            return atual.caminho.trim();
        }


        const gAtual = atual.g;
        const melhorG = visitados.get(atual.estado);
        if (gAtual > melhorG) continue;

        nosExpandidos++;

        if (atual.caminho.trim().split(/\s+/).length >= 15) continue;

//gerar os proximos movimentos com base no caminho atual

        const proximos = aux.gerarEstados(atual.caminho);
        totalSucessores += proximos.length;

        for (const prox of proximos) {
            const novoCubo = Cube.fromString(atual.estado);
            const movimento = prox.split(/\s+/).at(-1);
            novoCubo.move(movimento);

            const novoEstado = novoCubo.asString();
            const novoCaminho = atual.caminho + " " + movimento;
            const gNovo = gAtual + 1;
            const hNovo = heuristicaPeçasErradas(novoEstado);
            const fNovo = gNovo + hNovo;

// avaliação e inserção do proximo estado

            const gAntigo = visitados.get(novoEstado);
            if (gAntigo === undefined || gNovo < gAntigo) {
                visitados.set(novoEstado, gNovo);
                prioridade.push({
                    estado: novoEstado,
                    caminho: novoCaminho.trim(),
                    g: gNovo,
                    h: hNovo,
                    f: fNovo
                });
            }
        }

        // Memória estimada como soma do heap + visitados
        memoriaMax = Math.max(memoriaMax, prioridade.data.length + visitados.size);
    }

    return "Caminho não encontrado";
}

module.exports = AEstrela;
