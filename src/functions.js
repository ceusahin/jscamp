function addToCart(quantity, productName="defaultValue") {
    console.log("Sepete Eklendi! : " + productName + 
    " Adet : " + quantity)
}

addToCart(9)
// addToCart("Yumurta")
// addToCart("Karpuz", 15)

let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World!x2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

let product1 = {productName: "Elma", unitPrice: 10, quantity: 5}

function addToCart3(product) {
    console.log("Product Name : " + product.productName)
    console.log("Product Price : " + product.unitPrice)
    console.log("Product Quantity : " + product.quantity)
}

addToCart3(product1)


let product2 = {productName: "Elma", unitPrice: 10, quantity: 5}
let product3 = {productName: "Elma", unitPrice: 10, quantity: 5}
product2 = product3
product2.productName = "Karpuz"

console.log(product3.productName)


let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 15, quantity: 3},
    {productName: "Karpuz", unitPrice: 20, quantity: 2}
]

addToCart4(products)



// ...numbers --> rest operatoru (toparlar)
// ...numbers --> spread operatoru (ayristirir)

function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30, 10, 500, 600, 120]
console.log(Math.max(...numbers))

