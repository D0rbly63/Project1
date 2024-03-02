const nav  = document.querySelector('.nav__list')
const burger = document.querySelector('.burger')
const navlinks = document.querySelectorAll('.nav__item')

function burgerClick(){
    nav.classList.toggle('nav__list_active')
    burger.classList.toggle('active')
    navlinks.forEach((item,index)=>{
        console.log(item, index)
        if(item.style.animation){
            item.style.animation = ''
        }else{
            item.style.animation = `navlinkAnim 1s ease forwards ${index / 7 + 0.3}s`
        }
    })
}
