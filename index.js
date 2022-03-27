const btn =document.querySelector(".btn")
const nav =document.querySelector(".nav__menu")

btn.addEventListener("click",()=>{
    btn.classList.toggle("active")
    nav.classList.toggle("active")
})