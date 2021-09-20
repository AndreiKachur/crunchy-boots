import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItems } from '../Navbar/MenuItems'
import { bubble as Menu } from 'react-burger-menu'

import './NavBurgerMenu.scss'

function NavBurgerMenu() {

    const [burgerMenu, setBurgerMenu] = useState(false)

    function toogleBurgerMenu(up = false) {
        setBurgerMenu(!burgerMenu)
        if (up) window.scrollTo(0, 0)
    }

    return (
        <Menu
            onOpen={toogleBurgerMenu}
            onClose={toogleBurgerMenu}
            isOpen={burgerMenu}
        >
            <ul className='burger-menu' onClick={() => toogleBurgerMenu()}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className='burger-menu__item' >
                            <NavLink onClick={() => toogleBurgerMenu(true)}
                                className='burger-menu__item-links'
                                to={item.url}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </Menu>
    )
}

export default NavBurgerMenu;