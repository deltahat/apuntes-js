// Construyendo un lenguaje llamado platzon
// 1) Si la palabra termina con "ar" se le quitan esas dos ultimas letras
// 2) Si la palabra inicia con "z" se le añade "pe" al final
// 3) Si la palabra tiene 10 o mas letras se debe colocarle un "-" en la mitad
// 4) Si la palabra es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas

function platzon(str){
  let translation = str
  // 1)
  if (str.toLowerCase().endsWith("ar")){ // str a minusculas y me fijo si termina con "ar"
    translation = str.slice(0, -2) // Obtengo las ultimas dos letras de str
  }
  // 2)
  if (str.toLowerCase().startsWith("z")){
    translation += "pe"
  }
  return translation
}

// Tests
console.log(platzon("Programar")) // 1)
console.log(platzon("Zorro")) // 2)
