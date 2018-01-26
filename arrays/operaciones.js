// Forma de vermitir la cantidad de parametros sea variable
// Esto gracias al spread operator de javascript

// Forma mas sencilla de hacerlo
function suma(...numeros){
  let acum = 0
  for (let i = 0; i < numeros.length; i++ ){
    acum += numeros[i]
  }
  return acum
}
suma(1, 2, 5)

// Forma correcta de hacerlo
// con el metodo reduce que es el metodo de todos los arrays
// anteriormente se hizo con un for a  continuacion se hara con un metodo que recibe un array como parametro
function suma(...numeros){
  return numeros.reduce(function (acum, numero){ acum += numero return acum}, 0) //reduce recibe una funcion y el valor inicial del acumulador que es cero
}
suma(1, 2, 5)
