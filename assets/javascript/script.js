function start() {
  $("#inicio").hide();

  $("#fundoGame").append("<div id='jogador'  class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");  



   //--------------> PRINCIPAL VARAIAVEL DO JOGO <-------------------

     var jogo = {};
     var velocidade = 5;
     var podeAtirar = true;
     var posicaoY = parseInt(Math.random() *334);
     var TECLA = {
     up: 38,
     down: 40,
     fire: 32
  }

  jogo.pressionou = []

    //Verifica se o usuário pressionou alguma tecla 


  $(document).keydown(function(e){
  jogo.pressionou[e.which] = true;
  });


  $(document).keyup(function(e){
       jogo.pressionou[e.which] = false;
  });


   //-----------------------> LOOP do jogo <--------------------------
      jogo.timer = setInterval(loop, 30);

   //-----------------------> primeia função <------------------------

    function loop(){
 
      moveFundo();
      moveJogador();
      moveInimigo1();
      moveInimigo2();
      moveAmigo();
      colisao();
    }

 //--------------------- > fim da função loop <--------------------


    function moveFundo(){
     esquerda = parseInt($("#fundoGame").css("background-position"));
     $("#fundoGame").css("background-position", esquerda-1);
   }


  function moveJogador() {
  
    if (jogo.pressionou[TECLA.up]) {

      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top",topo-10);

      if (topo <= 10) {
    
    $("#jogador").css("top",topo+10);
    
      }

    }

     if (jogo.pressionou[TECLA.down]) {
    
      var topo = parseInt($("#jogador").css("top"));
     $("#jogador").css("top",topo+10);



     if (topo >= 434) { 
     $("#jogador").css("top",topo-10);
    
        }

    }
  
     if (jogo.pressionou[TECLA.fire]) {    
     //Chama função Disparo  
     disparo();
     }
   }

   function moveInimigo1() {

  posicaoX = parseInt($("#inimigo1").css("left"));
  $("#inimigo1").css("left",posicaoX-velocidade);
  $("#inimigo1").css("top",posicaoY);
    
    if (posicaoX<=0) {
    posicaoY = parseInt(Math.random() * 334);
    $("#inimigo1").css("left",694);
    $("#inimigo1").css("top",posicaoY);
      
    }
} //Fim da função moveinimigo1()


function moveInimigo2() {
  posicaoX = parseInt($("#inimigo2").css("left"));
  $("#inimigo2").css("left",posicaoX-3);
        
    if (posicaoX<=0) {
      
    $("#inimigo2").css("left",775);
          
    }
} // Fim da função moveinimigo2()

function disparo() {
  
  if (podeAtirar==true) {
    
  podeAtirar=false;
  
  topo = parseInt($("#jogador").css("top"))
  posicaoX= parseInt($("#jogador").css("left"))
  tiroX = posicaoX + 190;
  topoTiro=topo+37;
  $("#fundoGame").append("<div id='disparo'></div");
  $("#disparo").css("top",topoTiro);
  $("#disparo").css("left",tiroX);
  
  var tempoDisparo=window.setInterval(executaDisparo, 30);
  
  } //Fecha podeAtirar
 
  function executaDisparo() {
    posicaoX = parseInt($("#disparo").css("left"));
    $("#disparo").css("left",posicaoX+15); 

    if (posicaoX > 900) {
            
    window.clearInterval(tempoDisparo);
    tempoDisparo = null;
    $("#disparo").remove();
    podeAtirar = true;
          
    }
  } // Fecha executaDisparo()
} // Fecha disparo()


function colisao() {
  var colisao1 = ($("#jogador").collision($("#inimigo1")));
  // jogador com o inimigo1

  console.log(colisao1);

} //Fim da função


function moveAmigo(){
  posicaoX = parseInt($("#amigo").css("left"));
  $("#amigo").css("left",posicaoX+1);
        
    if (posicaoX>906) {
      
    $("#amigo").css("left",0);
          
    }
  }

}
