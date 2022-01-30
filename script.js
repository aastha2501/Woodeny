// variables
const cartBtn = document.querySelector('.shopping-cart');
const closeCartBtn = document.querySelector('.close-cart');


cartBtn.addEventListener('click',function(){
    cartOverlay.style.visibility="visible";
    cartDOM.style.right="0";
})

closeCartBtn.addEventListener('click',function(){
    cartOverlay.style.visibility="hidden";
    cartDOM.style.right="-40rem";
})

