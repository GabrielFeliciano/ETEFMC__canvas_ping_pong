let nivelDificuldade = Number(window.prompt("Qual a dificuldade do gosto você gostaria de jogar? Responda de 1 a 9."));

let largura = 600;  //define a largura do canvas/tabuleiro
let altura = 400;   //define a altura do cancas/tabuleiro

let corTabuleiro = "#1F8340";  //define a cor do tabuleiro

let corBolinha = 0;   //define a cor da bolinha
let xBolinha = 300;   //posição X da bolinha
let yBolinha = 200;   //posição Y da bolinha
let dBolinha = 20;    //tamanha da bolinha

let velocidadeXBolinha = nivelDificuldade * 2;  //velocidade X da bolinha
let velocidadeYBolinha = nivelDificuldade * 2;  //velocidade Y da bolinha

let aRaquete = 150;           //altura da raquete
let lRaquete = 10;            //lagura da rauete
let vRaquete = nivelDificuldade * 1.5;   //velocidade da raquete e letia com a velocidade que o usuario escolheu

let yRaqueteEsquerda = ((altura / 2) - (aRaquete / 2));  //pega o (valor da altura do tabuleiro e divide por dois) e depois subitrai a (altura da raquete dividida por 2)  para a raquete esquerda = 125
let yRaqueteDireita = ((altura / 2) - (aRaquete / 2));   //pega o (valor da altura do tabuleiro e divide por dois) e depois subitrai a (altura da raquete dividida por 2)  para a raquete direita = 125

let xRaqueteEsquerda = 10; //valor X da raquete esquerda
let xRaqueteDireita = largura - xRaqueteEsquerda - lRaquete; //pega o valor da lagura menos o valor da raquete esuerda e menos o valor da lagura da raquete que é igual a 580(obs: letia de acordo com os numero das letiaveis, caso troque)

let pontosEsquerda = 0   //inicia os pontos em 0
let pontosDireita = 0    //inicia os pontos em 0

function setup() {                //função para criar o canvas com a lagurra e altua estabelecida acima
    createCanvas(largura, altura);    //largura e altura do canvas
}

function criarTabuleiro(corTabuleiro) {   //função para colocar a cor no tabuleiro, que foi estabelecida acima
    background(corTabuleiro);       //cor do tabuleiro
}

function criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha) {  //função parra cria a bolinha
    circle(xBolinha, yBolinha, dBolinha);   //posiçoes e tamanho da bolinha
    fill(corBolinha);  //coloca a cor da bolinha
}

function criarRaquete(xRaquete, yRaquete, lRaquete, aRaquete) {  //função para ciar a raquete
    rect(xRaquete, yRaquete, lRaquete, aRaquete);                   //posiçoes, largura e altura da raquete
}

function movimentarBolinha() {          //função para movimentar a bolinha
    xBolinha = xBolinha + velocidadeXBolinha;      //adiciona o valor (X da bolinha) mais o (valor da velocidade X da bolinha) 
    yBolinha = yBolinha + velocidadeYBolinha;      //adiciona o valor (Y da bolinha) mais o (valor da velocidade Y da bolinha)
}

function movimentarRaqueteEsquerda() {  //função para movimentar a raquete esquerda
    if (keyIsDown(87)) {     //codigo da seta pra cima
        if (yRaqueteEsquerda >= 0) {   //se apertou a seta verifica se o (valoY da raquete esquerda é maior ou igual a 0)
            yRaqueteEsquerda = yRaqueteEsquerda - vRaquete;   //pega o (valor Y da aquete esquerda) e subtrai (a velocidade da raquete)
        }
    }
    if (keyIsDown(83)) {  //codigo da seta pra baixo
        if (yRaqueteEsquerda <= (altura - aRaquete)) { // se apertou o codigo da seta e se apertou verifica se o (valor Y da raquete esquerda) é menor ou igual  a (altura do tabuleiro menos a altura da raqquete = 250 letia)
            yRaqueteEsquerda = yRaqueteEsquerda + vRaquete; //pega o (valor Y da aquete esquerda) e soma (a velocidade da raquete)
        }
    }
}

function movimentarRaqueteDireita() { //função para movimentar a raquete direita
    if (keyIsDown(UP_ARROW)) { //codigo da seta pra cima
        if (yRaqueteDireita >= 0) { //se apertou a seta verifica se o valor (Y da raquete direita) é menor ou igual a 0
            yRaqueteDireita = yRaqueteDireita - vRaquete; //pega o (valor Y da aquete direita) e subtrai (a velocidade da raquete)
        }
    }
    if (keyIsDown(DOWN_ARROW)) {  //codigo da seta pra baixo
        if (yRaqueteDireita <= (altura - aRaquete)) { // se apertou o codigo da seta  verifica se o (valor Y da raquete direita) é menor ou igual  a (altura do tabuleiro menos a altura da raquete = 250 letia)
            yRaqueteDireita = yRaqueteDireita + vRaquete; //pega o (valor Y da aquete direita) e soma (a velocidade da raquete)
        }
    }
}

function verificarColisaoBolinhaParede() { //função para veificar a colisão da bolinha com a parede
    if (xBolinha >= (largura - (dBolinha / 2)) || xBolinha < (dBolinha / 2)) { //veifica se o (valor X da bolinha) é maior ou igual a (largura do tabuleiro - o tamanho da bolinha/2) ou se o o (valor X da bolinha) é menor que o (tamanho da bolinha/2)
        velocidadeXBolinha = -1 * velocidadeXBolinha //muda a direção da bolinha
    }
    if (yBolinha >= (altura - (dBolinha / 2)) || yBolinha < (dBolinha / 2)) { //veifica se o (valor Y da bolinha) é maior ou igual a (largura do tabuleiro - o tamanho da bolinha/2) ou se o o (valor Y da bolinha) é menor que o (tamanho da bolinha/2)
        velocidadeYBolinha = -1 * velocidadeYBolinha  //muda a direção da bolinha 
    }
}

function verificarColisaoBolinhaRaqueteEsquerda() {  //função para verificarr a colisão da bolinha com a raquete esquerda
    if (xBolinha - (dBolinha / 2) <= xRaqueteEsquerda + lRaquete &&
        yBolinha - (dBolinha / 2) <= yRaqueteEsquerda + aRaquete &&
        yBolinha + (dBolinha / 2) >= yRaqueteEsquerda) {
        velocidadeXBolinha = velocidadeXBolinha * -1
        velocidadeYBolinha = -1 * velocidadeYBolinha
        pontosEsquerda = pontosEsquerda + 1  //adiciona um ponto caso a bolinha e a raquete esquerda se tocam

    }
}

function verificarColisaoBolinhaRaqueteDireita() {  //função para verificarr a solisão da bolinha com a raquete direita
    if (
        xBolinha + (dBolinha / 2) >= xRaqueteDireita - lRaquete &&
        yBolinha - (dBolinha / 2) <= yRaqueteDireita + aRaquete &&
        yBolinha + (dBolinha / 2) >= yRaqueteDireita
    ) {
        velocidadeXBolinha = velocidadeXBolinha * -1
        velocidadeYBolinha = -1 * velocidadeYBolinha
        pontosDireita = pontosDireita + 1 //adiciona um ponto caso a bolinha e a raquete direita se tocam
    }
}

function incluirPlacar() {  //função paa incluir placar
    textSize(22);  //tamanho da leta
    text("Player 1: " + pontosEsquerda + " | Player 2: " + pontosDireita, (largura / 2) - 110, 22);   //adiciona um ponto a cada vez que ele toca na raquete
}

function draw() {    //chama as funçoes acima e as coloca pra funcionar
    criarTabuleiro(corTabuleiro);
    incluirPlacar();
    criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha);
    movimentarBolinha();
    verificarColisaoBolinhaParede();
    criarRaquete(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete);
    criarRaquete(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete);
    movimentarRaqueteEsquerda();
    movimentarRaqueteDireita();
    verificarColisaoBolinhaRaqueteEsquerda();
    verificarColisaoBolinhaRaqueteDireita();
}