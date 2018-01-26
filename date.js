// Que dia cae mi proximo cumple
day = 24
mes = 10
year = 1993
const nacimiento = new Date(year, mes - 1 , day)
const hoy = new Date()
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
proximoCumple
