let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// CRIA ORDEM ALEATORIA DE CORES
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// ACENDE A PROXIMA COR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number -250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// CHECA SE OS BOTOES CLICADOS SAO OS MESMOS DA ORDEM GERADA NO JOGO
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: $(score)\n Você acertou! Iniciando proximo nivel!`);
        nextLevel();
    }
}

//FUNCAO PARA O CLIQUE DO USUARIO
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)   
}

// CRIAR FUNCAO QUE RETORNA A COR
let createColorElement = (color) =>{
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//FUNCAO PARA PROXIMO NIVEL DE JOGO
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//FUNCAO PARA GAME OVER
let lose = () => {
    alert(`Pontuação: $(score) \n Você perdeu! Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//FUNCAO DE INICIO DO JOGO
let playGame = () =>{
    alert('Bem vindo ao Genesis! Iniciando novo jogo...');
    score = 0;

    nextLevel();
}

// EVENTOS DE CLIQUE PARA AS CORES
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//INICIO DO JOGO 
playGame();