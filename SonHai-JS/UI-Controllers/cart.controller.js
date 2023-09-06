import { cartState, products } from "../ui-global-state/state.js";
import { updateQuantityCartItem, deleteCartItem, totalCartCalculator, getValueCount } from "../services/cart.service.js";
import { getProductById } from "../utils/findById.js";


const updateQuantityEvent = () => {
    const quantity_left = document.querySelectorAll(".quantity-left")

    quantity_left.forEach(element => {
        element.addEventListener("click", () => {
            const id = element.getAttribute("data-id");
            updateQuantityCartItem(id, -1)
            updateQuantityDOM()
        })
    })

    const quantity_right = document.querySelectorAll(".quantity-right")

    quantity_right.forEach(element => {
        element.addEventListener("click", () => {
            const id = element.getAttribute("data-id");
            updateQuantityCartItem(id, 1)
            updateQuantityDOM()
        })
    })
}

const updateQuantityDOM = () => {
    const countDOM = document.querySelectorAll(".count")
    countDOM.forEach(element => {
        const id = element.getAttribute("data-id");
        const countValue = cartState.find(i => i.id === id)
        element.getAttributeNode("value").value = countValue.quantity
        showTotalCard()
    })
}

const deleteCartEvent = () => {
    const btn_Remove = document.querySelectorAll(".remove");
    btn_Remove.forEach(element => {
        element.addEventListener("click", () => {
            const id = element.getAttribute("data-id");
            deleteCartItem(id)
            showCart()
        })
    })
}

const inputChangeEvent = () => {
    const inputCount = document.querySelectorAll(".count")
    inputCount.forEach(element => {
        element.addEventListener("change", (e) => {
            const id = element.getAttribute("data-id");
            const inputCountValue = e.target.value;
            getValueCount(inputCountValue, id)
            showCart()
        })
    })
}

const showTotalCard = () => {
    const subtotalPrice = document.querySelector(".subtotal-price")
    subtotalPrice.innerText = "$" + totalCartCalculator()
}

const showCart = () => {
    const cartColum = document.querySelector(".cart-colum")
    const mapCart = cartState.map(cartItem => {
        const product = getProductById(cartItem)
        if (product) {
            return {
                ...product,
                ...cartItem,
            }
        }
    })

    const result = mapCart.map(value => {
        return ` <div class="cart-item" data-id="${value.id}">
                    <div class="cart-item-img">
                        <img src="${value.image}" alt="">
                    </div>
                    <div class="cart-item-desc">
                        <h3>${value.name}</h3>
                        <span id="cart-item-price">${value.currentPrice}</span>
                        <div class="quantity">
                            <button data-id="${value.id}" class="quantity-left"><i class="fa-solid fa-minus"></i></button>
                            <input data-id="${value.id}" value="${value.quantity}" class ="count">
                            <button data-id="${value.id}" class="quantity-right"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="remove" data-id="${value.id}"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <hr>`
    })

    cartColum.innerHTML = result.join(" ")

    deleteCartEvent()
    updateQuantityEvent()
    inputChangeEvent()
    showTotalCard()
}


export {
    showCart
}