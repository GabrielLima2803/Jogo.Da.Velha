
let numerador = Number(prompt("Informe quantas partidas você vai querer"));

let jogador = "X";
let resultado = "";

let vitoria = "";

let vit_O = 0;
let vit_X = 0;

let partida_continua = true;

let contador = 0

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");

let btnJogar = document.getElementById("jogar");
let btnResultado = document.getElementById("resultado")
let btnTeste = document.getElementById("teste")
function jogada(casa) {
    if (casa.innerHTML === "" && partida_continua){
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
        resultado = `Temos um Ganhador ${casa01.innerHTML}`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        placar(casa01.innerHTML);
        
    }
    else if(casa04.innerHTML !="" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML){
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        resultado = `Temos um Ganhador ${casa04.innerHTML}`
        placar(casa04.innerHTML);
    }
    else if(casa07.innerHTML !="" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML){
        resultado = `Temos um Ganhador ${casa07.innerHTML}`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        placar(casa07.innerHTML);
    }
    else if(casa01.innerHTML !="" && casa01.innerHTML === casa04.innerHTML && casa01.innerHTML === casa07.innerHTML){
        resultado = `Temos um Ganhador ${casa01.innerHTML}`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        placar(casa01.innerHTML);
    }
    else if(casa02.innerHTML !="" && casa02.innerHTML === casa05.innerHTML && casa02.innerHTML === casa08.innerHTML){
        resultado = `Temos um Ganhador ${casa02.innerHTML}`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        placar(casa02.innerHTML);
    }
    else if(casa03.innerHTML !="" && casa03.innerHTML === casa06.innerHTML && casa03.innerHTML === casa09.innerHTML){
        resultado = `Temos um Ganhador ${casa03.innerHTML}`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        placar(casa03.innerHTML);
    }
    else if(casa01.innerHTML !="" && casa01.innerHTML === casa05.innerHTML && casa01.innerHTML === casa09.innerHTML){
        resultado = `Temos um Ganhador ${casa01.innerHTML}`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        placar(casa01.innerHTML);
    }
    else if(casa03.innerHTML !="" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML){
        resultado = `Temos um Ganhador ${casa03.innerHTML}`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        btnTeste.style.display = "block";
        placar(casa03.innerHTML);
    }
    else if(casa01.innerHTML !="" &&  casa02.innerHTML !="" && casa03.innerHTML !="" && casa04.innerHTML !="" && casa05.innerHTML !="" && casa06.innerHTML !="" && casa07.innerHTML !="" && casa08.innerHTML !="" && casa09.innerHTML !=""){
        resultado = `Deu VELHA`
        btnJogar.style.display = "block";
        btnResultado.style.display = "block";
        
        
    }
    document.getElementById("resultado").innerHTML = resultado
}

function placar(ganhador) {
    partida_continua = false;
    if (ganhador === "X"){
        vit_X = vit_X + 1;
    }else{
        vit_O = vit_O + 1;
    }

    document.getElementById("teste").innerHTML = `<p> Placar: </p> <p> X: ${vit_X}</p> <p>O: ${vit_O} </p>`
}

function reinicia() {

    if (vit_X+ vit_O < numerador) {

        partida_continua = true;
        
    
        btnJogar.style.display = "none";
        btnResultado.style.display = "none";
        btnTeste.style.display = "none";
        resultado = "";
    
        jogador = "X";
        casa01.innerHTML="";
        casa02.innerHTML="";
        casa03.innerHTML="";
        casa04.innerHTML="";
        casa05.innerHTML="";
        casa06.innerHTML="";
        casa07.innerHTML="";
        casa08.innerHTML="";
        casa09.innerHTML="";
    }

    
}