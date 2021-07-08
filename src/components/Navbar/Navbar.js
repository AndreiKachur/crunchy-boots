import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { SiCrunchbase } from 'react-icons/si';
import { RiShoppingCartLine } from 'react-icons/ri';
import { MenuItems } from './MenuItems.js'

function Navbar() {
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
                    if (item.title === 'Video') {
                        return (
                            <li key={index} className='nav__list-item'>
                                <NavLink className={item.cName} to={item.url}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    }
                    return (
                        <li key={index} className='nav__list-item'>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <NavLink to='cart' className='nav__wrapper'>
                <div className='nav__cart'>
                    <RiShoppingCartLine />
                    <p className='nav__cart-title'>Cart:</p>
                    <span className='nav__cart-price'>15$</span>
                </div>
            </NavLink>
        </nav>
    )
}

export default Navbar
