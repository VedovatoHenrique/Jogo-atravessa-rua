let yCarros = [40, 96, 150, 210, 270, 318]
let xCarros = [600, 600, 600, 600, 600, 600]
let velocidadeCarros = [2.8, 4.5, 3.2, 4, 3.7, 2.3]
let larguraCarro = 50
let alturaCarro = 40

function mostraCarro() {
  for (let i = 0; i < imageCarros.length; i++) {
    image(imageCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro)
  }
}

function movimentaCarro() {
  for (let i = 0; i < imageCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaPosicaoInicialCarro() {
  for (let i = 0; i < imageCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50
}
