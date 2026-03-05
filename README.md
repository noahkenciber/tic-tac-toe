# 🎮 maxeiki_piloto

Um projeto de aplicação web simples de Jogo da Velha (Tic-Tac-Toe), projetado para ser versionado e publicado facilmente.

## 🏗️ 1. Arquitetura de Pastas (Padrão Web)
Para que o GitHub Pages identifique seu jogo automaticamente, os arquivos estão na raiz do projeto:
- `index.html`: Estrutura e Interface.
- `style.css`: Design e Grid 3x3.
- `script.js`: Lógica do Jogo.
- `README.md`: Explicação do projeto.

## 🧠 2. Melhores Práticas de Desenvolvimento
- **Separar Responsabilidades**: Código HTML, CSS e JS em arquivos distintos.
- **Uso de IDs Claros**: Elementos identificados individualmente (`cell-0` até `cell-8`).
- **Lógica de Vitória Eficiente**: Matriz de combinações vencedoras para validação rápida.
- **Reset Game**: Botão de reinicialização integrado para limpar o estado do jogo.

## 🚀 3. Fluxo de Publicação (Passo a Passo)

### Passo 1: Versionamento com GitHub Desktop
1. Abra o **GitHub Desktop**.
2. Vá em `File > New Repository`.
3. **Name**: `jogo-da-velha-antigravity`.
4. **Local Path**: Escolha a pasta deste projeto.
5. Clique em **Create Repository**.
6. Realize o **Commit to main** com a mensagem "Initial game version".
7. Clique em **Publish repository**.

### Passo 2: Deploy no GitHub Pages
1. No repositório no GitHub, acesse **Settings**.
2. Clique em **Pages** no menu lateral.
3. Em "Build and deployment", selecione a branch `main`.
4. Clique em **Save**. O link do jogo aparecerá no topo.

---
Desenvolvido seguindo as diretrizes Antigravity para projetos web.
