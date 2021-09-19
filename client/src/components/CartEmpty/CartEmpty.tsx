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
                    <div className='nav__wrapper'>
                        <NavLink to='/' >
                            <div className='cart-empty__not-worry'>don't worry!</div>
                        </NavLink>
                    </div>
                    <h3> Just go back and pick one.</h3>
                </div>
            </div>

        </>
    )
}

export default Cart
