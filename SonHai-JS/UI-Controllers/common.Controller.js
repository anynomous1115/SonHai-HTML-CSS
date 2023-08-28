const openCart = document.querySelector(".btnCart")
const overLay = document.querySelector(".cart__overlay")
const closeCart = document.querySelector(".close-icon")
const showCart = document.querySelector(".show-cart")
const cart = document.querySelector(".cart")
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll(".size-item");


openCart.addEventListener('click', function () {
    showCart.style.display = "block"
    cart.classList.add("cart__open")
    overLay.style.display = "block"

})
closeCart.addEventListener('click', function () {
    showCart.style.display = "none"
    overLay.style.display = "none"
})
overLay.addEventListener('click', function () {
    showCart.style.display = "none"
    overLay.style.display = "none"

})
// Lặp qua từng phần tử và gắn sự kiện click
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