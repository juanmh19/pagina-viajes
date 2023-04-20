const hero = document.querySelector(".hero")
const botontour = document.querySelector("#tours")

botontour.addEventListener("click", e=>{
    hero.classList.add("ocultado")
})