class Customer{
    constructor(id, customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345")
// prototyping
customer.name = "Hakan Sahin"
console.log(customer.name)

Customer.anything = "Anything"
console.log(Customer.anything)

console.log(customer.customerNumber)
console.log(customer.id)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}