//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Que dia da semana é hoje?");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
    alert("Tenha um bom fim de semana!");
} else{
    alert("Tenha uma boa semana!");
}