const name = 'delta'
const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

function run (){
  const min = 5
  const max = 10
  return Math.round(Math.random() * (max - min)) + min
}

let totalkm = 0
const length = days.length
for (let i = 0; i < length; i ++){
  const km = run()
  totalkm = totalkm + km
  console.log(`The day ${days[i]} ${name} ran ${km}km`)
}

averagekm = totalkm / length
console.log(`On average ${name} ran ${averagekm.toFixed(2)}km`)
