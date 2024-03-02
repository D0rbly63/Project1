const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const navItem = document.querySelectorAll('.nav__list')
const section = document.querySelectorAll('section')


let sectionColor = ''
let textColor = ''
let color = ''
if( localStorage.getItem('bg-color') != false ){
color = localStorage.getItem('bg-color')
header.style.background = color
footer.style.background = color
textColor = localStorage.getItem('textColor')
navItem.forEach( (el) => {
    el.style.color = textColor
    
})
sectionColor = localStorage.getItem('sectionColor')
sectionColor.forEach( (el) => {
    el.style.color = sectionColor
})

}
function themeDark(){
header.style.background = 'rgb(40,40,40)'
footer.style.background = 'rgb(40,40,40)'



localStorage.setItem('bg-color', 'rgb(40,40,40)')
header.style.transition = '3s ease-out'
footer.style.transition = '3s ease-out'




section.forEach( (el) => {
    el.style.background='rgb(40,40,40)'
    el.style.transition = '3s ease-out'
})

localStorage.setItem('sectionColor', 'rgb(40,40,40)')

navItem.forEach( (el) =>{
el.style.color = 'rgb(120, 156, 221)'
el.style.transition = '3s ease-out'
})



localStorage.setItem('textColor', 'rgb(120, 156, 221)')

}


function choceLight(){
header.style.background = 'OldLace'
footer.style.background = 'OldLace'





localStorage.setItem('bg-color', 'OldLace')
header.style.transition = '3s ease-out'
footer.style.transition = '3s ease-out'

section.forEach( (el) => {
    el.style.background='OldLace'
    el.style.transition = '3s ease-out'
})

localStorage.setItem('sectionColor', 'OldLace')

navItem.forEach( (el) =>{
    el.style.color = 'black'
    el.style.transition = '3s ease-out'
    })

    localStorage.setItem('textColor', 'black')
    
}



