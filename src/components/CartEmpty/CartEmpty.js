import React from 'react'
import { NavLink } from 'react-router-dom'
import EmptyCart from './img/empty-cart.png'
import './CartEmpty.scss'

function Cart() {
    return (
        <>
            <div className='cart-full cart-empty'>
                <img src={EmptyCart} alt='cart-empty' />
                <div className='cart-empty__text'>
                    <h3>It seems, you haven't choosen anything.</h3>
                    <NavLink to='/' className='nav__wrapper'>
                        <div className='cart-empty__not-worry'>don't worry!</div>
                    </NavLink>
                    <h3> Just go back and pick one.</h3>
                </div>
            </div>

        </>
    )
}

export default Cart
