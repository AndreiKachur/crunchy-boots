import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../../redux/reducers'
import './Navbar.scss'

import { SiCrunchbase } from 'react-icons/si';
import { RiShoppingCartLine } from 'react-icons/ri';

import { MenuItems } from './MenuItems'
import NavBurgerMenu from '../NavBurgerMenu'
import { State as ReducerStateTypes } from '../../redux/reducers'
import { DbItem } from '../../types/db-types'

interface PropTypes {
    cart: DbItem[]
    ordered: boolean
}

function Navbar() {

    const { cart, ordered }: PropTypes = useTypedSelector((s: ReducerStateTypes) => s.load)

    const calculateSum = () =>
        cart.reduce((acc, item) => acc + item.price * (item.amount || 0), 0)
    const price = (ordered || cart.length === 0) ?
        <span className='nav__cart-price'>0$</span> :
        <span className='nav__cart-price'>{calculateSum()}$</span>

    return (
        <>
            <NavBurgerMenu />
            <div style={{ height: '3.5rem' }}></div>

            <nav className='nav'>
                <NavLink to='/' className='nav__wrapper'>
                    <div className='nav__logo'
                        onClick={() => window.scrollTo(0, 0)}>
                        <SiCrunchbase />
                        <span className='nav__logo-title'>
                            Crunchy Boots
                        </span>
                    </div>
                </NavLink>

                <ul className='nav__list'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className='nav__list-item'
                                onClick={() => window.scrollTo(0, 0)}>
                                <NavLink className={item.cName} to={item.url}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                <NavLink to='cart' className='nav__wrapper'>
                    <div className='nav__cart'
                        onClick={() => window.scrollTo(0, 0)}>
                        <RiShoppingCartLine />
                        <p className='nav__cart-title'>Cart:</p>
                        {price}
                    </div>
                </NavLink>
            </nav>

        </>
    )
}

export default Navbar
