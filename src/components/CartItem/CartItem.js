import React from 'react'
import Sneaker from '../CardsSlider/img/01.webp'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'
import './CartItem.scss';

function CartItem({ item, onDelete, addToCart, deleteFromCart }) {
    const { title, price, url, amount, actualSize } = item;
    const pieces = amount > 1 ? ' items' : ' item'
    return (
        <div className='cart-item'>
            <img className='cart-item__img' src={url} alt={title} />
            <div className='cart-item__title'>
                {title}
            </div>
            <div className='cart-item__pieces' >
                {amount + pieces}
            </div>
            <div className='cart-item__size' >
                Size: {actualSize}
            </div>
            <div className='cart-item__change'>
                <FiMinusSquare 
                onClick = {deleteFromCart}
                />
                <FiPlusSquare 
                onClick = {addToCart}
                />
            </div>
            <div className='cart-item__price'>
                {price}$
            </div>
            <div className='cart-item__actions'>
                <RiDeleteBin2Line
                    className='cart-item__delete'
                    onClick={onDelete}
                />
            </div>
        </div>
    )
}

export default CartItem
