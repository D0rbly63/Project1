let buyF = false
let btn = document.getElementById('btn')
let basket = 0
let price = btn.previousSibling.previousSibling.textContent
price = price.replace(' ', '')
price = parseInt(price)
let basketprice = document.querySelector('.price')

if(localStorage.getItem('basket') !==null){
    basket = localStorage.getItem('basket')
    basketprice.textContent = basket
}

function buy(){
    if(buyF == false){
   btn.style.background = 'red'
    btn.textContent = 'В корзине'
    basket = paseInt(basket) + price
    buyF = true
    }else {
        btn.style.background = 'silver'
        btn.textContent = 'купить'
        basket = paseInt(basket) - price
        buyF = false
    }

    localStorage.setItem('basket', basket)
    basketprice.textContent = basket

}



