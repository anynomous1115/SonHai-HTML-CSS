const products = [
    {
        id: 1,
        name: 'A Beautiful Sweater For Women',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/01_1920x.png?v=1640740769',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/17097755_37_D8_720x.png?v=1640740769',
        disCount: 25,
        originalPrice: 77.00,
        color: ['#808000', '#ffffff'],
        size: ['M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'A Fashionable Crossbody Bag',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/05_1920x.png?v=1640740761',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/17035136_37_720x.png?v=1640740761',
        disCount: 0,
        originalPrice: 56.00,
        color: ['#d2b48c', '#ffffff'],
        size: ['S', 'M', 'L']
    },
    {
        id: 3,
        name: 'Beautiful Earrings',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/b1_grande.png?v=1640740744',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/b2_720x.png?v=1640740744',
        disCount: 25,
        originalPrice: 87.00,
        color: ['#daa520', '#ffe4e1', '#f4a460', '#fff5ee'],
        size: []
    },
    {
        id: 4,
        name: 'Boot Solar Wave Hiking',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/02_1920x.png?v=1640740756',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/021_720x.png?v=1640740756',
        disCount: 26,
        originalPrice: 432.00,
        color: [],
        size: []
    },
    {
        id: 5,
        name: 'Cellucor Amino Acid',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/3.1_1920x.jpg?v=1667211881',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/3.2_540x.jpg?v=1667211881',
        disCount: 31,
        originalPrice: 98.00,
        color: [],
        size: []
    },
    {
        id: 6,
        name: 'Check Structured Blazer',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/IMG_15_grande.png?v=1640740810',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/17095934_43_D2_360x.png?v=1640740810',
        disCount: 34,
        originalPrice: 66.00,
        color: ['#8fbc8f', '#ffffff'],
        size: ['S', 'M', 'L', 'XL']
    },
    {
        id: 7,
        name: 'Evlution Nutrition BCAA5000',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/5.1_720x.jpg?v=1667212272',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/5.2_720x.jpg?v=1667212274',
        disCount: 31,
        originalPrice: 98.00,
        color: [],
        size: []
    },
    {
        id: 8,
        name: 'Fashion Cat Eye Glasses',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/h2_1920x.png?v=1640740713',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/h3_360x.png?v=1640740713',
        disCount: 41,
        originalPrice: 54.00,
        color: ['#cd5c5c', '#daa520', '#e9967a', '#fff8dc'],
        size: []
    },
    {
        id: 9,
        name: 'Fashion High Heels Boots',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/y1_grande.png?v=1640740693',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/y2_360x.png?v=1640740693',
        disCount: 30,
        originalPrice: 47.00,
        color: [],
        size: ['S', 'M', 'L', 'XL']
    },
    {
        id: 10,
        name: 'Fashion High Heels Shoes',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/87090532_07_D41_grande.png?v=1640740797',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/87090532_071_360x.png?v=1640740797',
        disCount: 25,
        originalPrice: 289.00,
        color: ['#b8860b', '#ffffff'],
        size: ['S', 'M', 'L']
    },
]




function showProduct(data) {
    const productItem = document.querySelector(".product-grid");

    for (let item of data) {

        var currentProduct = item.originalPrice - (item.originalPrice / 100) * item.disCount;
        item.currentPrice = currentProduct
        var sizeString = "";
        function showSize(data) {
            var sizeAfter = [];
            for (let i = 0; i < data.length; i++) {
                let div = "<div class='size-item'>" + item.size[i] + "</div>";
                sizeAfter.push(div);
            }
            for (let i = 0; i < sizeAfter.length; i++) {
                sizeString += sizeAfter[i];
            }
        }
        showSize(item.size);

        var colorString = "";
        function showColor(data) {
            var colorAfter = [];
            for (let i = 0; i < data.length; i++) {
                let div = '<div class="color"><div class="color-item" style="background-color:' + item.color[i] + '"></div></div>';
                colorAfter.push(div);
            }
            for (let i = 0; i < colorAfter.length; i++) {
                colorString += colorAfter[i]
            }

        }
        showColor(item.color)

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
                        ${sizeString}
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
                        <!-- label and -->
                        <div class="color-product">
                            ${colorString}
                        </div>
                    </div>
                    </div>
              `
    }

    // const btn = document.getElementsByClassName("add-to-cart")
}
showProduct(products)

const colors = document.querySelectorAll('.color');

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

let listCart = [];
const element = document.querySelector(".add-to-cart")
console.log(element);
element.onclick = addCart() 
function addCart() {
    let id = element.getAttribute("data-id")
    console.log(id);
    const itemInCart = listCart.find(i => i.id === id)
    if (!itemInCart) {
        listCart.push({
            id,
            quantity: 1,
        })

    } else {
        itemInCart.quantity += 1
    }
    // reloadCart()
    console.log(listCart);
}
function reloadCart() {
    let newListCart = []
    listCart.map(function (item) {
        const itemInProduct = products.find(i => i.id === item.id)
        itemInProduct.quantity = item.quantity
        newListCart.push(itemInProduct)
    })
    const cartColum = document.querySelector(".cart-colum")
    cartColum.innerHTML = '';
    newListCart.forEach((value) => {
        if (value != null) {
            cartColum.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="${value.image}" alt="">
                        </div>
                        <div class="cart-item-desc">
                            <h3>${value.name}</h3>
                            <p><span id="cart-item-size">M</span>,<span id="cart-item-color">Olive</span></p>
                            <span id="cart-item-price">${value.currentPrice}</span>
                            <div class="quantity">
                                <button class="quantity-left"><i class="fa-solid fa-minus"></i></button>
                                <div class="count">${value.quantity}</div>
                                <button class="quantity-right"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <div class="remove"><i class="fa-solid fa-xmark"></i></div>
                    </div>
                    <hr>`;
        }
    })
    const quantityRight = document.querySelector(".quantity-right");
    quantityRight.addEventListener('click', augment())
    console.log(item.quantity);

}
function augment(){
    console.log("gsdsvdjasvdhasvdh")

}

function removeCart(key, id) {
    listCart.splice(listCart[key], 1)
    reloadCart()

}
