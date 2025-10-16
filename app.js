let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let pontuacao = 0;
let tempoInicio = Date.now();
let timerInterval;

// Elementos DOM
const speechBubble = document.getElementById('speechBubble');
const scoreElement = document.getElementById('score');
const attemptsElement = document.getElementById('attempts');
const timerElement = document.getElementById('timer');

// Inicializar jogo
function inicializarJogo() {
    exibirMensagemInicial();
    iniciarTimer();
    atualizarEstatisticas();
}

// Iniciar timer
function iniciarTimer() {
    tempoInicio = Date.now();
    timerInterval = setInterval(() => {
        const tempoDecorrido = Math.floor((Date.now() - tempoInicio) / 1000);
        const minutos = Math.floor(tempoDecorrido / 60).toString().padStart(2, '0');
        const segundos = (tempoDecorrido % 60).toString().padStart(2, '0');
        timerElement.textContent = `${minutos}:${segundos}`;
    }, 1000);
}

// Parar timer
function pararTimer() {
    clearInterval(timerInterval);
}

// Atualizar estatísticas
function atualizarEstatisticas() {
    scoreElement.textContent = pontuacao;
    attemptsElement.textContent = tentativas;
}

// Atualizar balão de fala da IA
function atualizarSpeechBubble(mensagem) {
    speechBubble.innerHTML = `<p>${mensagem}</p>`;
    speechBubble.style.animation = 'none';
    setTimeout(() => {
        speechBubble.style.animation = 'pulse 0.5s ease-in-out';
    }, 10);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
    }
    
    // Atualizar speech bubble baseado no contexto
    if (tag === '.title-highlight') {
        atualizarSpeechBubble(texto);
    }
    
    // Usar responsiveVoice se disponível
    if (typeof responsiveVoice !== 'undefined') {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }
}

function exibirMensagemInicial() {
    document.querySelector('.title-highlight').innerHTML = 'Número Secreto';
    atualizarSpeechBubble('Bem-vindo ao desafio! Tente adivinhar meu número secreto entre 1 e 50!');
}

function verificarChute() {
    let chute = document.querySelector('.game-input').value;
    
    if (!chute || chute < 1 || chute > 50) {
        atualizarSpeechBubble('Por favor, digite um número válido entre 1 e 50!');
        return;
    }
    
    chute = parseInt(chute);
    
    if (chute == numeroSecreto) {
        pararTimer();
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemVitoria = `🎉 Parabéns! Você acertou em ${tentativas} ${palavraTentativa}!`;
        
        // Calcular pontuação baseada nas tentativas e tempo
        const tempoDecorrido = Math.floor((Date.now() - tempoInicio) / 1000);
        const pontuacaoTempo = Math.max(0, 300 - tempoDecorrido); // Bônus por tempo
        const pontuacaoTentativas = Math.max(0, 100 - (tentativas * 10)); // Bônus por poucas tentativas
        pontuacao += pontuacaoTempo + pontuacaoTentativas + 50; // Pontuação base
        
        document.querySelector('.title-highlight').innerHTML = 'Você Venceu! 🏆';
        atualizarSpeechBubble(mensagemVitoria);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        // Adicionar efeito visual de vitória
        adicionarEfeitoVitoria();
        
    } else {
        if (chute > numeroSecreto) {
            atualizarSpeechBubble(`${chute} é muito alto! Tente um número menor.`);
        } else {
            atualizarSpeechBubble(`${chute} é muito baixo! Tente um número maior.`);
        }
        tentativas++;
        atualizarEstatisticas();
        limparCampo();
        
        // Adicionar feedback visual
        adicionarFeedbackVisual(false);
    }
}

function adicionarEfeitoVitoria() {
    const container = document.querySelector('.container');
    container.style.animation = 'celebrate 1s ease-in-out';
    
    // Adicionar confetes (simulado com partículas)
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            criarParticula();
        }, i * 100);
    }
}

function criarParticula() {
    const particula = document.createElement('div');
    particula.style.position = 'fixed';
    particula.style.width = '10px';
    particula.style.height = '10px';
    particula.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particula.style.borderRadius = '50%';
    particula.style.left = Math.random() * window.innerWidth + 'px';
    particula.style.top = '-10px';
    particula.style.pointerEvents = 'none';
    particula.style.animation = 'fall 3s linear forwards';
    
    document.body.appendChild(particula);
    
    setTimeout(() => {
        particula.remove();
    }, 3000);
}

function adicionarFeedbackVisual(acertou) {
    const input = document.querySelector('.game-input');
    if (acertou) {
        input.style.borderColor = '#ff6b35';
        input.style.boxShadow = '0 0 20px #ff6b35';
    } else {
        input.style.borderColor = '#f72585';
        input.style.boxShadow = '0 0 20px #f72585';
    }
    
    setTimeout(() => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }, 1000);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log('Número secreto:', numeroEscolhido); // Para debug
        return numeroEscolhido;
    }
}

function limparCampo() {
    const input = document.querySelector('.game-input');
    input.value = '';
    input.focus();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    pararTimer();
    iniciarTimer();
    atualizarEstatisticas();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
    // Resetar estilos
    document.querySelector('.container').style.animation = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    inicializarJogo();
    
    // Permitir Enter para chutar
    const input = document.querySelector('.game-input');
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            verificarChute();
        }
    });
    
    // Focar no input ao carregar
    input.focus();
});

// Adicionar estilos CSS para animações via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrate {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);







