let products = [
    {id:1, name:"Dell Laptop", unitPrice: 13000},
    {id:2, name:"HP Laptop", unitPrice: 14000},
    {id:3, name:"Asus Laptop", unitPrice: 17000},
    {id:4, name:"Monster Laptop", unitPrice: 16000},
    {id:5, name:"Casper Laptop", unitPrice: 15000}
]

console.log("<ul>")
products.map(product => console.log(`<li>${product.name}</li>`))
console.log("</ul>")


let filteredProducts = products.filter(products=>products.unitPrice>13000)
console.log(filteredProducts)

let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice, 0)
console.log(cartTotal)