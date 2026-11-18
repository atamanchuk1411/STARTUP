import './assets/styles/style.sass'

const black = document.querySelector("#black")
const open_popup = document.querySelector(".open")
const cancel_popup = document.querySelector(".cancel_popup")
const popup = document.querySelector(".menu")

open_popup.addEventListener("click", function(e){
    e.preventDefault()
    black.classList.add('di-block')
    popup.classList.add('di-block')
    cancel_popup.classList.add('di-block')
    console.log("+")
})

function closeBurger(e) {
    e.preventDefault()
    black.classList.remove('di-block')
    popup.classList.remove('di-block')
    cancel_popup.classList.remove('di-block')
}

cancel_popup.addEventListener("click", closeBurger)
black.addEventListener("click", closeBurger)