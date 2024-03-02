window.addEventListener('DOMContentLoaded' , function(){
    let button = document.querySelector('#btn-menu')
    let menu = document.querySelector('.header__menu')
    button.addEventListener('click' , function(){
     menu.classList.toggle('is-active')   
    })
})