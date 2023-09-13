// let cart = []
// const get = async () => {
//     await fetch(`http://localhost:3000/carts`)
//         .then(res => res.json())
//         .then(data => cart = data)

//         .catch((error) => {
//             console.log(error);
//         })
// }
// const main = async () => {
//     await get()
//     console.log(cart);
// }
// main()
// const promise = new Promise((resolve, reject) => {
//     resolve()
// })
// promise.then((result) => {
//     return result + 1
// })
//     .then((result) => {
//         return result + 1
//     })
//     .then((result) => {
//         console.log(result);
//     })

const arr = [
    {
        id: 11,
        quantity: 3
    },
    {
        id: 11,
        quantity: 7
    },
    {
        id: 11,
        quantity: 10
    },

]
const someArr = arr.every((element) => {
    return element.quantity > 10
})
console.log(someArr);