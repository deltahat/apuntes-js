const starWars7 = "Star Wars 7 el despertar de la fuerza"
const pgStarWars7 = 13

const nameDelta = "Delta"
const nameSantiago = "Santiago"

const ageDelta = 23
const ageSantiago = 12

function canWatchStarwars7(name, age, isWhitAdult = false){
  if (age >= pgStarWars7){
    alert(`${name} puede pasar a ver ${starWars7} por que tiene ${age} años.`)
  } else if (isWhitAdult) {
    alert(`${name} puede pasar a ver ${starWars7} aunque tiene ${age} años.
      Pero se encuentra acompañado/a por un adulto.`)
  }
  else {
    alert(`${name} no puede pasar a ver ${starWars7} por que tiene ${age} años.
      Necesita tener al menos ${pgStarWars7} años.`)
  }
}

canWatchStarwars7(nameDelta, ageDelta)
canWatchStarwars7(nameSantiago, ageSantiago, true)
