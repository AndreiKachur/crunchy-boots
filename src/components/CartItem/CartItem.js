import React from 'react'
import Sneaker from '../CardsSlider/img/01.webp'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'
import './CartItem.scss';

function CartItem() {
    return (
        <div className='cart-item'>
            <img className='cart-item__img' src={Sneaker} alt='sneaker' />
            <div className='cart-item__title'>
                Sneaker
            </div>
            <div className='cart-item__change'>
                <FiMinusSquare />
                <FiPlusSquare />
            </div>
            <div className='cart-item__price'>
                10$
            </div>
            <div className='cart-item__actions'>
                <RiDeleteBin2Line className='cart-item__delete' />
            </div>
        </div>
    )
}

export default CartItem
