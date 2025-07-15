
# 🧠 1º Atividade de Inteligência Artificial - Cubo Mágico 3x3x3

**Disciplina:** Inteligência Artificial  
**Professor:** Alexandre Arruda  
**Entrega via SIGAA até:** 25 de junho  
**Grupo:** Até 3 pessoas  

---

## 🎯 Sobre a Atividade

O desafio consiste em implementar algoritmos de busca para resolver o **Cubo Mágico 3x3x3** a partir de uma configuração inicial embaralhada.  

O Cubo Mágico é um quebra-cabeça tridimensional inventado em 1974 pelo professor húngaro Ernő Rubik, com o objetivo de alinhar todas as faces do cubo de modo que cada uma contenha apenas uma cor.

---

## 📚 Descrição da Atividade

Implementar algoritmos que forneçam uma solução para o Cubo Mágico em duas condições:

1. 🌀 A partir do estado solução, realizar N movimentos aleatórios e tentar resolvê-lo para valores de N incrementais (até onde for possível).  
2. 🎲 Resolver um estado inicial completamente aleatório, realizado por movimentações a partir do cubo resolvido (N qualquer).

---

## ⚙️ Tecnologias Utilizadas

- Node.js (JavaScript)
- API própria para representação do Cubo Mágico
- `fs` para geração de relatórios
- `readline` para menu interativo no terminal

---

## 🧠 Algoritmos Implementados

- 🔹 **Busca em Largura (BFS)** – aplicável para pequenos embaralhamentos (N ≤ 3)
- 🔹 **Busca em Profundidade Iterativa (IDDFS)**
- 🔹 **Busca A\* com heurística** (heurística: número de peças fora do lugar)
- 🔹 (Opcional) Busca Bidirecional com A\* – *não implementado neste trabalho*

---

## 📂 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cubo-magico-ia.git
   cd cubo-magico-ia
   ```
2. Instale o Node.js (se ainda não estiver instalado):
   [Download Node.js](https://nodejs.org)
3. Execute o projeto no terminal:
   ```bash
   node rubiksCube.js
   ```
4. Use o menu interativo para escolher o algoritmo desejado.

---

## 📊 Relatórios Gerados

Para cada execução, o sistema gera automaticamente arquivos com os seguintes dados:
- ✅ Quantidade de passos da solução
- ⏱️ Total de tempo gasto
- 🧠 Máxima memória utilizada (tamanho fila/pilha)
- 🌱 Número de nós expandidos
- 🔀 Fator de ramificação média

Arquivos de saída:
- `relatorio_astar.json`
- `relatorio_bfs.json`
- `relatorio_iddfs.json`
- `historico_execucoes.json`

---

## 📌 Observação

> A Busca em Largura (BFS) é executada apenas para cubos embaralhados com até 3 movimentos, evitando explosão combinatória. O algoritmo principal recomendado é o A\* com heurística.

---

## 👨‍💻 Grupo

| Nome               | Matrícula    |
|--------------------|--------------|
| Cauê Girão         | 202XXXXX     |
| Nome Integrante 2  | 202XXXXX     |
| Nome Integrante 3  | 202XXXXX     |

---

## 🏁 Resultado Esperado

O sistema resolve o Cubo Mágico embaralhado com até **6 movimentos** usando o algoritmo A\*, gerando relatórios detalhados e gráficos comparativos.

---

## 📜 Licença

MIT License © 2025 - Trabalho acadêmico

