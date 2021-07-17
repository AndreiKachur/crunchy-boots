import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Navbar.scss'
import './BurgerMenu.scss'
import { SiCrunchbase } from 'react-icons/si';
import { RiShoppingCartLine } from 'react-icons/ri';
import { MenuItems } from './MenuItems.js'
import { bubble as Menu } from 'react-burger-menu'

function Navbar({ cart }) {

    const [burgerMenu, setBurgerMenu ] = useState(false)

    function toogleBurgerMenu() { setBurgerMenu (!burgerMenu) }

    const calculateSum = () => cart.reduce((acc, item) => acc + item.price * item.amount, 0)
    const price = cart.length === 0 ?
        <span className='nav__cart-price'>0$</span> :
        <span className='nav__cart-price'>{calculateSum()}$</span>

    function showSettings(event) {
        event.preventDefault();

    }

    return (
<>
        <Menu
        // disableAutoFocus
        onOpen={toogleBurgerMenu}
        onClose={ toogleBurgerMenu }
        isOpen={burgerMenu}
        // pageWrapId={"page-wrap"}
        // outerContainerId={"outer-container"} 
        >
        <ul className='burger-menu' onClick={toogleBurgerMenu}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className='burger-menu__item' >
                <NavLink onClick={toogleBurgerMenu}
                  className='burger-menu__item-links'
                  to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </Menu>
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
     
</>
    )
}
const mapStateToProps = state => ({ cart: state.cart })
export default connect(mapStateToProps, {})(Navbar)
