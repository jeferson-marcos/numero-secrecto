# 🎮 Número Secreto - Jogo Futurista

Um jogo interativo de adivinhação com design futurista e recursos avançados, desenvolvido em JavaScript, HTML e CSS.

![Game Preview](https://img.shields.io/badge/Status-Completo-brightgreen)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 🚀 Sobre o Projeto

O **Número Secreto** é um jogo de adivinhação moderno onde o jogador deve descobrir um número aleatório entre 1 e 50. O jogo apresenta um design futurista com animações, efeitos visuais impressionantes e recursos interativos como síntese de voz.

### ✨ Características

- 🎨 **Design Futurista**: Interface moderna com gradientes, neon e animações
- 🎵 **Síntese de Voz**: Feedback por áudio usando ResponsiveVoice
- 📊 **Sistema de Pontuação**: Acompanhe sua performance
- ⏱️ **Timer**: Cronômetro para medir o tempo de jogo
- 🎯 **IA Virtual**: Personagem animado que interage com o jogador
- 📱 **Responsivo**: Adaptável para diferentes tamanhos de tela
- ⚡ **Animações Suaves**: Efeitos visuais e transições fluidas

## 🎯 Como Jogar

1. **Objetivo**: Descobrir o número secreto entre 1 e 50
2. **Digite**: Insira um número no campo de entrada
3. **Receba Dicas**: A IA dará dicas se o número é maior ou menor
4. **Pontuação**: Quanto menos tentativas, maior a pontuação
5. **Novo Jogo**: Clique em "Novo Jogo" para reiniciar

### 🏆 Sistema de Pontuação

- **1 tentativa**: 1000 pontos
- **2-3 tentativas**: 500 pontos
- **4-5 tentativas**: 200 pontos
- **6+ tentativas**: 100 pontos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Variáveis CSS customizadas
  - Flexbox e Grid Layout
  - Animações e transições
  - Gradientes e efeitos neon
- **JavaScript ES6+**:
  - Manipulação do DOM
  - Event Listeners
  - Funções assíncronas
  - Geração de números aleatórios
- **PHP 8.2**: Servidor web
- **Apache**: Servidor HTTP
- **Docker**: Containerização da aplicação
- **ResponsiveVoice API**: Síntese de voz
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Orbitron + Poppins)

## 📁 Estrutura do Projeto

```
numero-secrecto/
├── index.html          # Página principal
├── app.js             # Lógica do jogo
├── style.css          # Estilos e animações
├── Dockerfile         # Configuração Docker
├── docker-compose.yml # Orquestração Docker
├── .dockerignore      # Arquivos ignorados no build
├── img/               # Recursos de imagem
│   ├── JS Game.html   # Versão alternativa
│   └── JS Game_files/ # Arquivos da versão alternativa
└── README.md          # Documentação
```

## 🚀 Como Executar

### Opção 1: Execução Direta
1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Comece a jogar!

### Opção 2: Com Docker (Recomendado)
```bash
# Usando Docker Compose (mais fácil)
docker-compose up -d

# Ou usando Docker diretamente
docker build -t numero-secreto .
docker run -d -p 8081:80 --name numero-secreto-game numero-secreto
```

Acesse `http://localhost:8080` no navegador.

### Opção 3: Servidor Local
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no navegador.

## 🔧 Funcionalidades Técnicas

### Principais Funções JavaScript

- `gerarNumeroAleatorio()`: Gera número aleatório único
- `verificarChute()`: Processa tentativa do jogador
- `exibirMensagemNaTela()`: Atualiza interface
- `calcularPontuacao()`: Sistema de pontuação
- `iniciarTimer()`: Cronômetro do jogo
- `limparCampo()`: Reset do input
- `falarTexto()`: Síntese de voz

### Recursos CSS

- **Variáveis CSS** para tema consistente
- **Animações keyframe** para efeitos visuais
- **Media queries** para responsividade
- **Pseudo-elementos** para decorações
- **Transform 3D** para efeitos de profundidade

## 🐳 Docker

### Requisitos
- Docker Desktop instalado
- Docker Compose (incluído no Docker Desktop)

### Comandos Úteis

```bash
# Construir e executar com Docker Compose
docker-compose up -d

# Parar os containers
docker-compose down

# Ver logs
docker-compose logs -f

# Reconstruir após mudanças
docker-compose up -d --build

# Executar apenas com Docker
docker build -t numero-secreto .
docker run -d -p 8080:80 --name numero-secreto-game numero-secreto

# Parar container Docker
docker stop numero-secreto-game
docker rm numero-secreto-game
```

### Configuração
- **Porta**: 8080 (host) → 80 (container)
- **Volume**: Código sincronizado para desenvolvimento
- **Servidor**: Apache com PHP 8.2
- **Rede**: Rede isolada para o projeto

## 🎨 Design e UX

- **Paleta de Cores**: Tons roxos, laranjas e rosas neon
- **Tipografia**: Orbitron (futurista) + Poppins (legibilidade)
- **Animações**: Partículas flutuantes, pulsação, hover effects
- **Layout**: Centralized flexbox com responsividade
- **Feedback**: Visual e auditivo para todas as ações

## 🌟 Melhorias Futuras

- [ ] Sistema de recordes locais
- [ ] Múltiplos níveis de dificuldade
- [ ] Modo multiplayer
- [ ] Estatísticas detalhadas
- [ ] Temas personalizáveis
- [ ] Integração com redes sociais
- [ ] PWA (Progressive Web App)

## 📱 Compatibilidade

- ✅ Chrome/Edge 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Dispositivos móveis iOS/Android

## 👨‍💻 Desenvolvedor

---

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

---

*Divirta-se jogando! 🎮✨*