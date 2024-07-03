const btnCart=document.querySelector('.container-icon')
const containerCartProducts= document.querySelector('.container-items')

btnCart.addEventListener('click', () =>{
    containerCartProducts.classList.toggle('hidden-cart')
})

constcartInfo= document.querySelector('.cart-product')