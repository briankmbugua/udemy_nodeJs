//object property shorthand

const name = 'Brian'
const userAge = 99

const user = {
    name, //Object property shorthand
    age: userAge,
    location: 'mars'
}

console.log(user);

//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 202,
    salesPrice: undefined
}

// const label = product.label
// const {label:productlabel, stock, rating = 5} = product

// // console.log(label);
// console.log(stock);
// console.log(productlabel);
// console.log(rating);


const transaction =  (type,{label, stock=0} = {}) => {
    console.log(type,label,stock);
}

transaction('order',product)