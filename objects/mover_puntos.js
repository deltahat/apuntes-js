const p1 = {
  x:0,
  y:4,
  moverx: function (distanciax) {this.x = this.x + distanciax},
  movery: function (distanciay) {this.y = this.y + distanciay}
}
const p2 = {
  x:3,
  y:0,
  moverx: function (distanciax) {this.x = this.x + distanciax},
  movery: function (distanciay) {this.y = this.y + distanciay}
}

function distancia(p1, p2){
  const distx = p1.x - p2.x
  const disty = p1.y - p2.y

  return Math.sqrt(distx * distx + disty * disty)
}

console.log(distancia(p1, p2)) //opcion comun
console.log(distancia({x:20, y:20}, {x:10, y:10})) //declarando los puntos dentro
p1.moverx(10)
