import { cartState } from "../UI-Global-State/cart.js"
const totalCart = () => {
    let totalCart = 0
    cartState.map(item => {
        totalCart += item.totalItemCartPrice
    })
    const subtotalPrice = document.querySelector(".subtotal-price")
    subtotalPrice.innerText = "$" + totalCart.toLocaleString();
}
export{
    totalCart
}