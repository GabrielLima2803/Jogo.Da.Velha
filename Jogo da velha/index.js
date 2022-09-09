
let jogador = "X";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");


function jogada(casa) {
    if (casa.innerHTML === ""){
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }
        
}
function alterna_jogador() {
    if (jogador === "X"){
        jogador = "O";
    }else{
        jogador = "X";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML!="" && casa01.innerHTML===casa02.innerHTML && casa01.innerHTML=== casa03.innerHTML){
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
    }
}