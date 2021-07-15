import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Navbar.scss'
import { SiCrunchbase } from 'react-icons/si';
import { RiShoppingCartLine } from 'react-icons/ri';
import { MenuItems } from './MenuItems.js'

function Navbar({ cart }) {
    
    const calculateSum = () => cart.reduce((acc, item) => acc + item.price*item.amount, 0)

    const price = cart.length === 0 ?
        <span className='nav__cart-price'>0$</span> :
        <span className='nav__cart-price'>{calculateSum()}$</span>

    return (
        <nav className='nav'>
            <NavLink to='/' className='nav__wrapper'>
                <div className='nav__logo'>
                    <SiCrunchbase />
                    <span className='nav__logo-title'>
                        Crunchy Boots
                    </span>
                </div>
            </NavLink>

            <ul className='nav__list'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className='nav__list-item'>
                            <NavLink className={item.cName} to={item.url}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <NavLink to='cart' className='nav__wrapper'>
                <div className='nav__cart'>
                    <RiShoppingCartLine />
                    <p className='nav__cart-title'>Cart:</p>
                    {price}
                </div>
            </NavLink>
        </nav>
    )
}
const mapStateToProps = state => ({ cart: state.cart })
export default connect(mapStateToProps, {})(Navbar)
