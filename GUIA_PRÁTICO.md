# Guia de Melhores Práticas: maxeiki_piloto & Deploy GitHub

Este documento formaliza as diretrizes para o desenvolvimento do maxeiki_piloto com foco em versionamento e deploy.

## 🏁 1. Especificações Técnicas do Jogo
- **Tabuleiro**: Matriz 3x3 (9 posições).
- **Símbolos**: X (Jogador 1) e O (Jogador 2).
- **Regras**: Alternância de turnos, proibição de sobrescrita e detecção de estado final.
- **Vitória**: 3 símbolos iguais em Horizontal, Vertical ou Diagonal.
- **Empate**: Tabuleiro cheio sem vencedor.

## 🏗️ 2. Arquitetura de Software
Para garantir que o Antigravity desenvolva um projeto Escalável:
1. **HTML Semântico**: Uso de `<main>`, `<section>`, `<header>` e `<footer>`.
2. **CSS Modular**: Variáveis de cores (`:root`) para facilitar mudanças de tema (Dark/Light Mode).
3. **JS Orientado a Estado**: Manter uma variável `gameState` (array de 9 posições) sincronizada com o DOM.

## 🚀 3. Fluxo de Deploy (Caminho Crítico)
1. **GitHub Desktop**: Criar repositório local apontando para a pasta raiz.
2. **Commit Inicial**: `Initial commit: Setup Tic-Tac-Toe architecture`.
3. **Sync**: Publicar repositório no GitHub.
4. **GitHub Pages Activation**: Ativar nas configurações do repositório para gerar o link público.

---
*Este guia serve como base para todos os projetos de jogos simples desenvolvidos nesta estação de trabalho.*
