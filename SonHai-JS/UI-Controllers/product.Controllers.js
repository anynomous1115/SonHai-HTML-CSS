import { products } from "../ui-global-state/state.js"
import { addToCart } from "../services/cart.service.js";
import { showCart } from "../ui-controllers/cart.controller.js";

function showSize(sizes) {
    let sizeString = "";
    let sizeAfter = [];
    for (let i = 0; i < sizes.length; i++) {
        let div = "<div class='size-item'>" + sizes[i] + "</div>";
        sizeAfter.push(div);
    }
    for (let i = 0; i < sizeAfter.length; i++) {
        sizeString += sizeAfter[i];
    }
    return sizeString
}

function showColor(colors) {
    let colorString = "";
    let colorAfter = [];
    for (let i = 0; i < colors.length; i++) {
        let div = '<div class="color"><div class="color-item" style="background-color:' + colors[i] + '"></div></div>';
        colorAfter.push(div);
    }
    for (let i = 0; i < colorAfter.length; i++) {
        colorString += colorAfter[i]
    }
    return colorString
}

const addToCartEvent = () => {
    const btn_addToCart = document.querySelectorAll(".add-to-cart")
    const showCartItem = document.querySelector(".show-cart")
    const cart = document.querySelector(".cart")
    const overLay = document.querySelector(".cart__overlay")

    btn_addToCart.forEach(element => {
        element.addEventListener("click", () => {
            showCartItem.style.display = "block"
            cart.classList.add("cart__open")
            overLay.style.display = "block"
            const id = element.getAttribute("data-id");
            addToCart(id)
            showCart()
        })
    })
}

function showProduct() {
    const productItem = document.querySelector(".product-grid");
    for (let item of products) {
        var currentProduct = item.originalPrice - (item.originalPrice / 100) * item.disCount;
        item.currentPrice = currentProduct
        productItem.innerHTML += `
                    <div class="product-grid-item">
                    <div class="wrap-img">
                        <div class="img-product">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="img-hover" style="background-image:url(${item.imageHover})"></div>
                        <span class="discount">
                            -${item.disCount}%
                        </span>
                        <div class="wish-list">
                            <a href="" class="favourite">
                                <i class="fa-regular fa-heart heartAnimation"></i>
                            </a>
                            <a href="" class="favourite">
                                <i class="fa-solid fa-rotate"></i>
                            </a>
                        </div>
                        <div class="btn-product-item">
                            <a href="" class="quick-view">
                                Quick View
                            </a>
                            <button data-id="${item.id}" class="add-to-cart">
                                    Add To Cart
                            </button>
                        </div>
                        <div class="size">
                        ${showSize(item.size)}
                        </div>
                    </div>
                    <div class="img-desc">
                        <h3 class="name">
                            <a href="">${item.name}</a>
                        </h3>
                        <div class="price">
                            <span class="current">
                            $${item.currentPrice}
                            </span>
                            <span class="original-price">
                            $${item.originalPrice}.00
                            </span>
                        </div>
                        <div class="color-product">
                            ${showColor(item.color)}
                        </div>
                    </div>
                    </div>
              `
    }
    
    addToCartEvent()

}

export {
    showProduct
}
