

function festa(){

   
    document.getElementById("festar").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none";

    mostrarPerfil();
    }


    function mercado(){

        document.getElementById("market").style.display = "block";
        document.getElementById("town").style.display = "none";
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeUsuario").style.display = "none"; //nomeg

        mostrarPerfil();

}


function comida1(){

    if(personagemSelecionado){

        if(personagemSelecionado.dinheiro >=15){

            alert("voce comprou um hamburguer de R$25! está no seu inventário")
            personagemSelecionado.dinheiro-=25

        }
        
        else{

            alert("voce não pode comprar hamburguer pois não tens R$15")
        }
    }
atualizarPerfil(personagemSelecionado)
 }


function comida2(){


    if(personagemSelecionado){

        if(personagemSelecionado.dinheiro >=10){
  
            alert("você comprou uma salada de R$10! Está no seu inventário, quando precisar pode comê-lo")
            personagemSelecionado.dinheiro-=10  

        }
        
        else{

            alert("você não tem R$10 para comprar uma salada.")

        }
    }
atualizarPerfil(personagemSelecionado)

}

function comida3(){

    if(personagemSelecionado){
        if(personagemSelecionado.dinheiro >=20){

            alert("você comprou uma fatia de bolo por R$20, está no seu inventário, quando precisar/querer, pode comer")
            personagemSelecionado.dinheiro-=20

        }

        else{

            alert("você não tem dinheiro suficiente para comprar a fatia de bolo de R$20")
        }
    }
atualizarPerfil(personagemSelecionado)  

}

let trabalhoescolhido

function trabalhar(){

    document.getElementById("trabalho").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; //nomeg




}
function quarto(){



    document.getElementById("quartinho").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; //nomeg

}

function mimir(){

         if(personagemSelecionado){

            if(personagemSelecionado.energia <=20){

               alert("Dormiu e recuperou 10 de energia")
               personagemSelecionado.energia+=10

            }
            else{

                alert("Não está com sono")
            }
         }
atualizarPerfil(personagemSelecionado)
}

function banheiro(){

    document.getElementById("Banheiroo").style.display = "block";
    document.getElementById("town").style.display = "none";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none"; //nomeg

}
function banhar(){

if(personagemSelecionado){

    if(personagemSelecionado == atriz){

             alert("Você ganhou 5 pontos de felicidade, afinal, um banho sempre nos deixa melhor!!")
             personagemSelecionado.felicidade+=5
         

    }
    else if(personagemSelecionado == programadora){

             alert("após um dia nessa vida triste, um banho sempre nos deixa um pouco mais feliz. Voçê ganhou mais 1 ponto de felicidade")
             personagemSelecionado.felicidade+=1

    }
    else if(personagemSelecionado == paleontologa){

            alert("Um banho sempre é bom.")
            personagemSelecionado.felicidade+=0

    }
    else if(personagemSelecionado == cozinheira){


            alert("Um banho parece sempre ser uma boa ideia. Você adora um banho e fica mais feliz com isso. Ganhou +1 ponto de felicidade")
            personagemSelecionado.felicidade+=1

    }

}
atualizarPerfil(personagemSelecionado)
}

function escovar(){

          if(personagemSelecionado){

              alert("é sempre bom escovar os dentes")
              personagemSelecionado.energia-=1

          }
atualizarPerfil(personagemSelecionado)
}

function rosto(){

       if(personagemSelecionado){

          if(personagemSelecionado.energia <=3 ){


                 alert("Não tens energia para lavar o rosto, vá dormir.")

          }
        else{

                 alert("Lavastes o rosto mas perdeu 2 de energia")
                 personagemSelecionado.energia-=2

        }
       }
atualizarPerfil(personagemSelecionado)
}

