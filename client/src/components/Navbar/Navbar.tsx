import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

import { SiCrunchbase } from 'react-icons/si';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';
import { BsPersonSquare } from 'react-icons/bs';
import { MdExitToApp } from 'react-icons/md';

import { MenuItems } from './MenuItems'
import NavBurgerMenu from '../NavBurgerMenu'
import { useTypedSelector } from '../../redux/reducers'
import { getUserId } from '../../redux/actions/actions-reg';
import { State as ReducerStateTypes } from '../../redux/reducers'
import { CartItem } from '../../types/db-types'

interface PropTypes {
    cart: CartItem[]
}

function Navbar() {

    const { userId } = useTypedSelector(s => s.register)
    const dispatch = useDispatch()

    const { cart }: PropTypes = useTypedSelector((s: ReducerStateTypes) => s.load)

    const calculateSum = () =>
        cart.reduce((acc, item) => acc + item.price * (item.amount || 0), 0)
    const price = cart.length === 0 ?
        <span className='nav__cart-price'>0$</span> :
        <span className='nav__cart-price'>{calculateSum()}$</span>

    return (
        <>
            <NavBurgerMenu />
            <div style={{ height: '3.5rem' }}></div>

            <nav className='nav'>
                <NavLink exact to='/' className='nav__wrapper'>
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
                                <NavLink exact className={item.cName} to={item.url}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <div className='nav__block'>
                    <NavLink to='cart' className='nav__wrapper'>
                        <div className='nav__block__item' onClick={() => window.scrollTo(0, 0)}>
                            <RiShoppingCartLine />
                            <p className='nav__title'>Cart:</p>
                            {price}
                        </div>
                    </NavLink>
                    {!userId ?
                        <NavLink to='register' className='nav__wrapper'>
                            <div className='nav__block__item'>
                                <GoSignIn />
                                <p className='nav__title'>Sign In/Up</p>
                            </div>
                        </NavLink> :
                        <>
                            <NavLink to='profile' className='nav__wrapper'>
                                <div className='nav__block__item'>
                                    <BsPersonSquare />
                                    <p className='nav__title'>Cabinet</p>
                                </div>
                            </NavLink>
                            <NavLink exact to='/' className='nav__wrapper'>
                                <div onClick={() => dispatch(getUserId(''))}>
                                    <MdExitToApp style={{ fontSize: '1.3rem' }} />
                                    <p className='nav__title'>Exit</p>
                                </div>
                            </NavLink>
                        </>
                    }
                </div>
            </nav>

        </>
    )
}

export default Navbar
