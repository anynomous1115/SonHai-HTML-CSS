function totalCart(newListCart) {
    let totalCart = 0
    newListCart.map(function(item){
        totalCart+=item.totalItem
    })
    subtotalPrice.innerText = totalCart.toLocaleString();
}
