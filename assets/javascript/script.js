function start() {
	$("#inicio").hide();

	$("#fundoGame").append("<div id='jogador'  class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");	



   //--------------> PRINCIPAL VARAIAVEL DO JOGO <-------------------

     var jogo = {};
     var TECLA = {
     W: 87,
     S: 83,
     D: 68
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
    }

 //--------------------- > fim da função loop <--------------------


    function moveFundo(){
     esquerda = parseInt($("#fundoGame").css("background-position"));
	   $("#fundoGame").css("background-position", esquerda-1);
   }


  function moveJogador() {
  
    if (jogo.pressionou[TECLA.W]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top",topo-10);  
    }

     if (jogo.pressionou[TECLA.S]) {
    
      var topo = parseInt($("#jogador").css("top"));
     $("#jogador").css("top",topo+10); 
    }
  
    if (jogo.pressionou[TECLA.D]) {
    
    //Chama função Disparo  
    }
  }
}
