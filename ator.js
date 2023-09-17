let xAtor = 240;
let yAtor = 366;
let colisao = false;
let meusPontos= 0;
let vidas = 5;




function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
};

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
};

function verficaColisao(){
  for (let i = 0; i < imageCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      retornaAtor();
      somColisao.play()
      if(vidas > 0 ){
      vidas -= 1;
      }
    }
    if(vidas == 0){
      alert("Game Over")
      return gameOver();
    }
}
};

function gameOver(){
  vidas = 5
  meusPontos = 0
}



function retornaAtor(){
  yAtor = 366;
};

function incluiPontos(){
  textSize(25)
  textAlign(CENTER)
  fill(255,240,60)
  text(meusPontos, width / 5, 27);
}
function minhasVidas(){
  textSize(25)
  textAlign(CENTER)
  fill(255,1,60)
  text(vidas, 380, 27);
}

function marcaPonto(){
  if( yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    retornaAtor();
  }
}
