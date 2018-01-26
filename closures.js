// La funcion interna puede acceder a las variables de la funcion externa
// y recuerda el valor que tenian esas variables cuando fueron llamadas.
//
// No se pisa el valor que tenia antes, sino que recuerda ese  valor que tiene
// y devuelve una funcion para que luego la invoquemos.
//
function saludarFamilia(apellido){ //funcion externa
  return saludarMiembroDeFamilia(nombre){ // funcion interna
    console.log(`hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia("gomez")
saludarGomez("Pedro")
