import { cartState, products } from "../ui-global-state/state.js";
import { updateQuantityCartItem, deleteCartItem, totalCartCalculator } from "../services/cart.service.js";

const showTotalCard = () => {
    const subtotalPrice = document.querySelector(".subtotal-price")
    subtotalPrice.innerText = "$" + totalCartCalculator()
}
const updateQuantity = () => {
    const quantity_right = document.querySelectorAll(".quantity-right")
    const quantity_left = document.querySelectorAll(".quantity-left")

    quantity_left.forEach(element => {
        element.addEventListener("click", () => {
            const id = element.getAttribute("data-id");
            updateQuantityCartItem(id, -1)
            showCart()
        })
    })

    quantity_right.forEach(element => {
        element.addEventListener("click", () => {
            const id = element.getAttribute("data-id");
            updateQuantityCartItem(id, 1)
            showCart()
        })
    })

}
const deleteCart = () => {
    const btn_Remove = document.querySelectorAll(".remove");
    btn_Remove.forEach(element => {
        element.addEventListener("click", () => {
            const id = element.getAttribute("data-id");
            deleteCartItem(id)
            showCart()
        })
    })
}

const showCart = () => {
    const cartColum = document.querySelector(".cart-colum")
    const mapCart = cartState.map(cartItem => {
        const isCheck = products.find(product => product.id == cartItem.id)
        if (isCheck) {
            return {
                ...isCheck,
                ...cartItem,
            }
        }
    })
    const result = mapCart.map(value => {
        return ` <div class="cart-item">
        <div class="cart-item-img">
            <img src="${value.image}" alt="">
        </div>
        <div class="cart-item-desc">
            <h3>${value.name}</h3>
            <span id="cart-item-price">${value.currentPrice}</span>
            <div class="quantity">
                <button data-id="${value.id}" class="quantity-left"><i class="fa-solid fa-minus"></i></button>
                    <input type="" value="${value.quantity}" min="0" name="" class ="count">
                <button data-id="${value.id}" class="quantity-right"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
        <div class="remove" data-id="${value.id}"><i class="fa-solid fa-xmark"></i></div>
    </div>
    <hr>`
    })
    cartColum.innerHTML = result.join(" ")

  
  
showTotalCard()
    deleteCart()
    updateQuantity()
}


export {
    showCart
}