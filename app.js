

let ism = document.getElementById('name')
let boy = document.getElementById('boy')
let ogirlik = document.getElementById('vazn')
let body = document.querySelector('.modal-body')

let h1el = document.querySelector ('h1')

const check = document.getElementById('showModal')
const refresh = document.getElementById('refresh')


check.addEventListener ('click', calculator)

    function calculator () {
        
    let bmi = Math.floor(vazn.value / boy.value ** 2)

    if (bmi <= 18) {
        body.classList.add ('thin')
        body.classList.remove ('normal')
        body.classList.remove ('fat')
        h1el.innerText = ` ${ism.value} Eat normal food when you are thin  `
    }  else 
    if (bmi > 18 && bmi <= 25 ) {
        body.classList.remove ('thin')
        body.classList.add ('normal')
        body.classList.remove ('fat')
        h1el.innerText = ` Congratulations ${ism.value} you have a normal weight. Keep it up. `
      } else if (bmi > 25)  {
        body.classList.remove ('thin')
        body.classList.remove ('normal')
        body.classList.add ('fat')
        h1el.innerText = `You are obese, please diet.`
    } else  {
        body.classList.remove ('thin')
        body.classList.remove ('normal')
        body.classList.add ('fat')
        h1el.innerText = `please fill full`
  }
} 



const modalEl = document.querySelector('.modal')
const closeModalBtn = document.getElementById('closeModal')
const showModalBtn = document.getElementById('showModal')
const overlayEl = document.querySelector('.overlay')

showModalBtn.addEventListener('click', () => {
    modalEl.classList.remove('hidden')
    overlayEl.classList.remove('hidden')
  })
  
  closeModalBtn.addEventListener('click', addHidden)

function addHidden() {
    modalEl.classList.add('hidden')
    overlayEl.classList.add('hidden')
  }

overlayEl.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    addHidden()
  }
})

refresh.addEventListener('click', ()=> {
  ism.value = ''
  boy.value = '' 
  ogirlik.value = ''
})
  