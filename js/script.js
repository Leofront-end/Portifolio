let navSkills = document.querySelectorAll(".skills")
let habilidades = document.querySelectorAll('.habilidades')
let textoSecundario = document.querySelector('.text-secondary')
let modais = document.querySelectorAll('dialog')
let BotaoForm = document.querySelector("#formButton")
let form = document.querySelector("form")

let modalAbrir = {
    sorvete: 0,
    clinica: 1,
    ghibli: 2
}

Object.entries(modalAbrir).forEach(([id, index]) => {
    const abrir = document.querySelector(`#${id}`)
    abrir.addEventListener('click', () => modais[index].showModal())
})

document.querySelectorAll(".bi.bi-x-lg").forEach((btnFechar, index) => {
    btnFechar.addEventListener('click', () => modais[index].close())
})

BotaoForm.addEventListener('click', (e) => {
    e.preventDefault()
    if (form.checkValidity()) {
        form.action = 'https://formsubmit.co/leonardo.s.mendonca05@gmail.com'
        form.submit()
    } else {
        document.querySelector('form p').classList.remove('d-none')
    }
})

const toggleHabilidades = (ativa, inativa, texto) => {
    navSkills[ativa].classList.add('active')
    navSkills[inativa].classList.add('active')

    habilidades[inativa].classList.remove('d-flex') 
    habilidades[inativa].classList.add('d-none') 

    habilidades[ativa].classList.add('d-flex')
    habilidades[ativa].classList.remove('d-none')

    textoSecundario.innerHTML = texto
}

navSkills[1].addEventListener('click', () => toggleHabilidades(1,0,"Clique no Hard Skills para ver minhas habilidades"))

navSkills[0].addEventListener('click', () => toggleHabilidades(0,1,"Clique no Soft Skills para ver minhas habilidades"))