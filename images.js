let imagemDaEstrada
let imagemDoAtor

let imagemCarro1
let imagemCarro2
let imagemCarro3


let somTrilha;
let somColisao;
let somPonto;

function preload() {
  imagemDoAtor = loadImage('images/ator-1.png');
  imagemDaEstrada = loadImage('images/estrada.png');
  imagemCarro1 = loadImage('images/carro-1.png');
  imagemCarro2 = loadImage('images/carro-2.png');
  imagemCarro3 = loadImage('images/carro-3.png');
  
  imageCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro1, imagemCarro3];

  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}
