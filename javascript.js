const btnRaffle     = document.querySelector(".botaoSortear")
const txtArea       = document.getElementById("entradaNomes")
const openResult    = document.querySelector(".resultado")
const changeResult  = document.querySelector(".resultado p")
const btnclose      = document.querySelector('.fechar')
let arrayNames      =  []

btnRaffle.addEventListener('click', getFormData)
btnclose.addEventListener('click', closeResult)

function getFormData(){
  arrayNames             = txtArea.value.split(",")
  const lengthNames      = arrayNames.length  
  const raffledNumber    = raffleNames(lengthNames)
  const nameRuffled      = arrayNames[raffledNumber]
  showResult(nameRuffled)
}

function showResult(nameRuffled){
openResult.classList.add("mostrarResultado")
changeResult.innerHTML   = `Resultado: ${nameRuffled}`
}

function closeResult(){
  openResult.classList.remove("mostrarResultado")
}

function raffleNames(lengthNames){
  return Math.floor(Math.random() * (lengthNames - 0 ) + 0 )
}