import { cartState } from "../UI-Global-State/cart.js"
import { products } from "../data/products.js"
import { saveLocalStorage } from "./localStorage.js"
import { totalCart } from "./totalCart.js"
const totalItemCart = () => {
    cartState.map(item => {
        const mapTotalItemCart = products.find(i => i.id == item.id)
        item.totalItemCartPrice = mapTotalItemCart.currentPrice * item.quantity
        saveLocalStorage("cart",cartState)
    })
    totalCart()
}

export {

    totalItemCart
}