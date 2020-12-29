let addToCardBtns = document.querySelectorAll(".add_to_cart");
let cartAmount = document.getElementById("n");

for(let i=0;i<addToCardBtns.length;i++){
    addToCardBtns[i].addEventListener("click",function() {
        cartAmount.textContent = +cartAmount.textContent + 1
    })
}


let likeBtn = document.querySelectorAll(".item_like")

likeBtn.forEach((item) => {
    item.addEventListener("click",function(e){
        item.classList.toggle("liked")
    })
})