import React from 'react'
import Button from '../Button';
import Sneaker from '../CardsSlider/img/01.webp'
import './Item.scss';

function Item() {
    return (
        <div className='item'>
            <img className='item__img' src={Sneaker} alt='sneaker' />
            <div className='item__text'>
                <li>Sneaker</li>
                <li>Price: 10$</li>
            </div>
            <Button />
        </div>
    )
}

export default Item
