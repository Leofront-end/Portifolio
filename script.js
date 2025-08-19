let navSkills = document.querySelectorAll(".skills")
let habilidades = document.querySelectorAll('.habilidades')
let textoSecundario = document.querySelector('.text-secondary')
let modal = document.querySelectorAll('dialog')
let sorveteModal = document.querySelector("#sorvete")
let clinicaModal = document.querySelector("#clinica")
let ghibliModal = document.querySelector("#ghibli")
let fecharModal = document.querySelectorAll(".bi.bi-x-lg")

sorveteModal.addEventListener('click', () => {
    modal[0].showModal()
})

clinicaModal.addEventListener('click', () => {
    modal[1].showModal()
})

ghibliModal.addEventListener('click', () => {
    modal[2].showModal()
})

fecharModal[0].addEventListener('click', () => {
    modal[0].close()
})

fecharModal[1].addEventListener('click', () => {
    modal[1].close()
})

fecharModal[2].addEventListener('click', () => {
    modal[2].close()
})

navSkills[1].addEventListener('click', () => {
    navSkills[1].classList.add('active')
    navSkills[0].classList.remove('active')
    
    habilidades[0].className = "hard-skills habilidades d-none flex-row gap-2 flex-wrap justify-content-center"
    habilidades[1].className = "soft-skills habilidades d-flex flex-row gap-2 flex-wrap justify-content-center"

    textoSecundario.innerHTML = "Clique no Hard Skills para ver minhas habilidades"
})

navSkills[0].addEventListener('click', () => {
    navSkills[0].classList.add("active")
    navSkills[1].classList.remove("active")
    
    habilidades[1].className = "hard-skills habilidades d-none flex-row gap-2 flex-wrap justify-content-center"
    habilidades[0].className = "soft-skills habilidades d-flex flex-row gap-2 flex-wrap justify-content-center"

    textoSecundario.innerHTML = "Clique no Soft Skills para ver minhas habilidades"
})