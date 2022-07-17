const cart = [];

let subtotalCart = 0;

function addToCart(product) {
    subtotalCart = subtotalCart + product.price;
    cart.push(product);
    console.log('Se agregó ' + product.title + ' ($' + product.price + ') al carrito. Total = $' + subtotalCart)
    alert('Agregó ' + product.title + ': $' + product.price + ' al carrito. Su total es: $' + subtotalCart)
};

addToCart({id: 1, title: 'Soporte Drean 03 04', price: 4570});
addToCart({id: 2, title: 'Retén 25', price: 270});
addToCart({id: 3, title: 'Ruleman SFK 6203', price: 630});
addToCart({id: 4, title: 'Ruleman SFK 6204', price: 970});

console.log(cart)