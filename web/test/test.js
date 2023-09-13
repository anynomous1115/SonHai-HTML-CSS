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
const promise = new Promise((resolve, reject) => {
    resolve()
})
promise.then((result) => {
    return result + 1
})
    .then((result) => {
        return result + 1
    })
    .then((result) => {
        console.log(result);
    })