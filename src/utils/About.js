const oposity = {
    me: 'studies',
    studies: 'me'
}

export const mouseIn = (e) =>{
    const atual = e.target.getAttribute('id')
    const oposeElement = document.querySelector(`#${oposity[atual]}`)
    oposeElement.classList.add('back')
}
export const mouseOut = (e) =>{
    const atual = e.target.getAttribute('id')
    const oposeElement = document.querySelector(`#${oposity[atual]}`)
    oposeElement.classList.remove('back')
}