let links = document.querySelectorAll(".skills")
let habilidades = document.querySelectorAll('.habilidades')
let textoSecundario = document.querySelector('.text-secondary')

links[1].addEventListener('click', () => {
    links[1].className = 'nav-link active skills'
    links[0].className = 'nav-link skills'
    
    habilidades[0].className = "hard-skills habilidades d-none flex-row gap-2 flex-wrap justify-content-center"
    habilidades[1].className = "soft-skills habilidades d-flex flex-row gap-2 flex-wrap justify-content-center"

    textoSecundario.innerHTML = "Clique no Hard Skills para ver minhas habilidades"
})

links[0].addEventListener('click', () => {
    links[0].className = 'nav-link active skills'
    links[1].className = 'nav-link skills'
    
    habilidades[1].className = "hard-skills habilidades d-none flex-row gap-2 flex-wrap justify-content-center"
    habilidades[0].className = "soft-skills habilidades d-flex flex-row gap-2 flex-wrap justify-content-center"

    textoSecundario.innerHTML = "Clique no Soft Skills para ver minhas habilidades"
})