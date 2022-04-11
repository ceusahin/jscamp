console.log("hello, world.")

let dolarDun = 9.20
let dolarBugun = 9.30
// JS type safe degildir.!
console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11
console.log(euroDun)

// array = dizi
let konutKredileri = ["Konut Kredisi","Emlak Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
// console.log(konutKredileri)

console.log("<ul>")

for(let i = 0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")


// let, var, const
let sayi1 = 10
sayi1 = "Hakan Sahin"
let student = {id:1, name:"Hakan"}
// console.log(student)

function save(puan = 10, ogrenci) {
    console.log(ogrenci.name+": "+puan)
}
save(undefined, student);

let students = ["Hakan Sahin","Emre Guclu","James Mcgrade","Busra Mutlu"]
console.log(students)

let students2 = [student,{id:2, name:"Batuhan"},"Ankara",{city:"Istanbul"}]
console.log(students2)

// rest
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

console.log(typeof showProducts)
showProducts(1,"Elma","Armut")

// spread
let points = [1,3,5,6,15,33,67,899]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

// destructure
let populations = [10000,20000,30000,[40000,100000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)


let category = {id:1, name:"İçeçek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)


