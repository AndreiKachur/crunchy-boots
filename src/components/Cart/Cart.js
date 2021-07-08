import React from 'react'
import CartEmpty from '../CartEmpty'
import CartItem from '../CartItem'
import './Cart.scss';

function Cart() {
    return (
        <>
            <div className='cart-wrapper'>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            {/* <CartEmpty /> */}
        </>
    )
}

export default Cart
