const Cube = require('cubejs');
const aux = require('./funcAux.js');
const BFS = require('./BFS.js');
const IDDFS = require('./IDDFS.js');
const AEstrela = require('./AE.js')

const { performance } = require('perf_hooks');


Cube.initSolver();

const cube = new Cube;
// const cube = Cube.random();

const movimentos = ["U", "U'", "U2", "D", "D'", "D2", "L", "L'", "L2", "R", "R'", "R2", "F", "F'", "F2", "B", "B'", "B2"];

(async () => {
    const resp = await aux.perguntar("Quantos movimentos vão ser feitos? ");
    const quant = parseInt(resp);

    if (isNaN(quant) || quant <= 0) {
       console.log("Número inválido");
       return;
    }

    movimentosIniciais = ""
    for (let i = 0; i < quant; i++) {
        move = aux.escolherAleatorio(movimentos)
        movimentosIniciais += move + " ";
    }


    // cube.move("U R2 F' L B D2 U' F");
    console.log(movimentosIniciais.trim())
    cube.move(movimentosIniciais.trim());

    const estadoInicial = cube.asString();

    console.log(estadoInicial);

    if (quant <= 5){
        const tBFS0 = performance.now();
        const solucao = BFS(estadoInicial);
        const tBFS1 = performance.now();

        console.log("Solução encontrada:", solucao);
        console.log(`Tempo de execução do BFS: ${(tBFS1 - tBFS0).toFixed(2)} ms`);
    }

    if (quant <= 5){
    const tDFS0 = performance.now();
    const solucao2 = IDDFS(estadoInicial, 7);
    const tDFS1 = performance.now();

    console.log("Solução encontrada:", solucao2);
    console.log(`Tempo de execução do IDDFS: ${(tDFS1 - tDFS0).toFixed(2)} ms`);
    }
    
    const tAE0 = performance.now();
    const solucao3 = AEstrela(estadoInicial);
    const tAE1 = performance.now();

    console.log("Solução encontrada:", solucao3);
    console.log(`Tempo de execução do A*: ${(tAE1 - tAE0).toFixed(2)} ms`);
})();




