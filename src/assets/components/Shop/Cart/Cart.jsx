import React from 'react';

const Cart = ({ cart, handleClearCart }) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat(((shipping + total) * 0.1).toFixed(2));
    const price = total + tax;

    return (
        <div className='bg-red-700  text-amber-400 p-5 rounded-md fixed '>
            <h1 className='my-3 Text-2xl'>Selected Items: {cart.length}</h1>
            <p className='my-3 text-xl'>Shipping Charge: $ {shipping} </p>
            <p className='my-3 text-xl'>Price: $ {total} </p>
            <p className='my-3 text-xl'>Tax: $ {tax}</p>
            <h1 className='my-3 text-2xl'>Total Price: $ {price}</h1>
            <div className='my-5'>
                <button className='btn btn-sm text-amber-400' onClick={handleClearCart}>Clear Cart</button>
                <button className='btn btn-sm text-amber-400 my-3 ms-5'>Process to order</button>
            </div>

        </div>
    );
};

export default Cart;