// Object Property Shorthand    

const name = 'Mike';
const userAge = 38;

const user = {
    name,
    age: userAge,
    location: 'Miami'
}


// object destructuring 

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label: productLabel, stock, rating = 5} = product

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}


transaction('order', product)