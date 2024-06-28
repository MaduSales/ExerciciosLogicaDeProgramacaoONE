//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacaoTime1 = parseInt(prompt("Digite a pontuação do seu time"));
let pontuacaoTime2 = parseInt(prompt("Digite a pontuação do time advsersário"));

if (pontuacaoTime1 > pontuacaoTime2){
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

