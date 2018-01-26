let base = 5
let altura = 7

// -----------------------------------
// Funcion tradicional
function triangulo(base, altura){
  return (base * altura) / 2
}

// Funcion flecha de una linea (arrow function)
let triangulo_linea = (base, altura) => (base * altura) / 2

// Funcion flecha de varias lineas (arrow function)
let triangulo_lineas = (base, altura) => {
  let primer_calculo = (base * altura) / 2
  let segundo_calculo = (base * altura) / 2
  return primer_calculo + segundo_calculo
}
// -----------------------------------

//Invocando las funciones
console.log(`El area es:
${triangulo(base, altura)}`)

console.log(`El area es:
${triangulo_linea(base, altura)}`)

console.log(`El area es:
${triangulo_lineas(base, altura)}`)
