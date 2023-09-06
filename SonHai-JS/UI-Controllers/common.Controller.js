import { showCart } from "../ui-controllers/cart.controller.js"

const openCartEvent = () => {
    const showCartItem = document.querySelector(".show-cart")
    const cart = document.querySelector(".cart")
    const openCart = document.querySelector(".btnCart")
    const overLay = document.querySelector(".cart__overlay")

    openCart.addEventListener('click', function () {
        showCartItem.style.display = "block"
        cart.classList.add("cart__open")
        overLay.style.display = "block"
        showCart()
    })
}

const closeCartEvent = () => {
    const showCartItem = document.querySelector(".show-cart")
    const closeCart = document.querySelector(".close-icon")
    closeCart.addEventListener('click', function () {
        showCartItem.style.display = "none"
        overLay.style.display = "none"
    })
    const overLay = document.querySelector(".cart__overlay")
    overLay.addEventListener('click', function () {
        showCartItem.style.display = "none"
        overLay.style.display = "none"

    })
}

const colorsEvent = () => {
    const colors = document.querySelectorAll('.color');
    colors.forEach(function (color) {
        color.addEventListener('click', function () {
            // Kiểm tra xem phần tử có lớp "open" hay không
            if (this.classList.contains('active')) {
                // Nếu có, xóa
                this.classList.remove('active');
            } else {
                let parent = this.parentNode;
                let child = parent.querySelectorAll('.color')
                // Nếu không, thêm
                child.forEach(function (c) {
                    c.classList.remove('active');
                })
                this.classList.add('active');
            }
        });
    })
}
// Lặp qua từng phần tử và gắn sự kiện click

const sizesEvent = () => {
    const sizes = document.querySelectorAll(".size-item");
    sizes.forEach(function (size) {
        size.addEventListener('click', function () {
            if (this.classList.contains('active-size')) {
                this.classList.remove('active-size')
            } else {
                let parent = this.parentNode;
                let child = parent.querySelectorAll('.size-item')
                child.forEach(function (c) {
                    c.classList.remove('active-size')
                })
                this.classList.add('active-size')
            }
        })
    })
}
export {
    closeCartEvent,
    openCartEvent,
    colorsEvent,
    sizesEvent
}