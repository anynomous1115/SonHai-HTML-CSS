import { openCart } from "../ui-controllers/cart.controller.js"

const cartEvent = () => {
    const btnOpenCart = document.querySelector(".btnCart")
    const closeCart = document.querySelector(".close-icon")
    const overLay = document.querySelector(".cart__overlay")

    btnOpenCart.addEventListener('click', () => {
        openCart(true)
    })

    closeCart.addEventListener('click', () => {
        openCart(false)
    })

    overLay.addEventListener('click', () => {
        openCart(false)
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
    cartEvent,
    colorsEvent,
    sizesEvent
}