
function voltar(){
    document.body.style.backgroundImage = "url(/assets/cenario/tela-inicial.jpeg)"
    document.getElementById("town").style.display = "flex";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none";
    document.getElementById("trabalho").style.display = "none";
    document.getElementById("festar").style.display = "none";
    document.getElementById("market").style.display = "none";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("tempo-jogo").style.display="block";
    document.getElementById("Sacola-Abrir").style.display = "none";
}

function voltarCasa(){
    document.body.style.backgroundImage = "url(/assets/cenario/casa.jpg)" 
    document.getElementById("tempo-jogo").style.display="block";
    document.getElementById("dentroCasa").style.display = "flex";
    document.getElementById("quartinho").style.display = "none";
    document.getElementById("Banheiroo").style.display = "none";
    document.getElementById("cozinha").style.display = "none"
    document.getElementById("Sacola-Abrir").style.display = "none"
}

function voltarMenuFesta(){

    document.getElementById("festar").style.display="flex"
    document.getElementById("bebidas").style.display="none"
    document.body.style.backgroundImage = "url(/assets/cenario/festa.jpg)"

}