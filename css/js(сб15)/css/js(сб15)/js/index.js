let buyF = false

function buy(){
    if(buyF == false){
        document.getElementById("btn").style.background = 'blue'
        document.getElementById("btn").textContent = 'В корзине'
        buyF = true
    }else {
        document.getElementById("btn").style.background = 'Silver'
        document.getElementById("btn").textContent = 'Купить'
        buyF = false
    }
   
}
