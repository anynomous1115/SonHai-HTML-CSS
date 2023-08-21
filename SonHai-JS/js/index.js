const products = [
    {
        name: 'A Beautiful Sweater For Women',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/01_1920x.png?v=1640740769',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/17097755_37_D8_720x.png?v=1640740769',
        disCount: 25,
        originalPrice: 77.00,
        color: ['#808000', '#ffffff'],
        size: ['M', 'L', 'XL']
    },
    {
        name: 'A Fashionable Crossbody Bag',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/05_1920x.png?v=1640740761',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/17035136_37_720x.png?v=1640740761',
        disCount: 0,
        originalPrice: 56.00,
        color: ['#d2b48c', '#ffffff'],
        size: ['S', 'M', 'L']
    },
    {
        name: 'Beautiful Earrings',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/b1_grande.png?v=1640740744',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/b2_720x.png?v=1640740744',
        disCount: 25,
        originalPrice: 87.00,
        color: ['#daa520', '#ffe4e1', '#f4a460', '#fff5ee'],
        size: []
    },
    {
        name: 'Boot Solar Wave Hiking',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/02_1920x.png?v=1640740756',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/021_720x.png?v=1640740756',
        disCount: 26,
        originalPrice: 432.00,
        color: [],
        size: []
    },
    {
        name: 'Cellucor Amino Acid',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/3.1_1920x.jpg?v=1667211881',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/3.2_540x.jpg?v=1667211881',
        disCount: 31,
        originalPrice: 98.00,
        color: [],
        size: []
    },
    {
        name: 'Check Structured Blazer',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/IMG_15_grande.png?v=1640740810',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/17095934_43_D2_360x.png?v=1640740810',
        disCount: 34,
        originalPrice: 66.00,
        color: ['#8fbc8f', '#ffffff'],
        size: ['S', 'M', 'L', 'XL']
    },
    {
        name: 'Evlution Nutrition BCAA5000',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/5.1_1920x.jpg?v=1667212272',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/5.2_360x.jpg?v=1667212274',
        disCount: 31,
        originalPrice: 98.00,
        color: [],
        size: []
    },
    {
        name: 'Fashion Cat Eye Glasses',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/h2_1920x.png?v=1640740713',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/h3_360x.png?v=1640740713',
        disCount: 41,
        originalPrice: 54.00,
        color: ['#cd5c5c', '#daa520', '#e9967a', '#fff8dc'],
        size: []
    },
    {
        name: 'Fashion High Heels Boots',
        image: 'https://gougi-demo.myshopify.com/cdn/shop/products/y1_grande.png?v=1640740693',
        imageHover: 'https://gougi-demo.myshopify.com/cdn/shop/products/y2_360x.png?v=1640740693',
        disCount: 30,
        originalPrice: 47.00,
        color: [],
        size: ['S', 'M', 'L', 'XL']
    },
    {
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
    const sizeProduct = document.getElementsByClassName(".size")
    for (let item of data) {
        var currentProduct = item.originalPrice - (item.originalPrice / 100) * item.disCount;
        console.log(currentProduct);
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
                                <i class="fa-regular fa-heart"></i>
                            </a>
                        </div>
                        <div class="btn-product-item">
                            <a href="" class="quick-view">
                                Quick View
                            </a>
                            <a href="" class="add-to-cart">
                                Add To Cart
                            </a>
                        </div>
                        <div class="size">
                        </div>
                    </div>
                    <div class="img-desc">
                        <h3 class="name">
                            <a href="">${item.name}</a>
                        </h3>
                        <div class="price">
                            <span class="current">
                                ${currentProduct}
                            </span>
                            <span class="original-price">
                                ${item.originalPrice}.00
                            </span>
                        </div>
                        <!-- label and -->
                        <div class="color-product">
                            <div class="color">
                            <div class="color-item"></div>
                            </div>
                        </div>
                    </div>
                    </div>
              `

    }

}
showProduct(products)