import React from 'react'
import { WithPopOver } from '../Hoc'
import './Card.scss';

function CardButton({ onCart, text, pop }) {

    const sliderClass = pop ? 'slider-card__pop-over' :
        'slider-card__pop-over slider-card__pop-over_hidden'

    return (
        <>
            <button
                className='slider-card__btn'
                onClick={onCart}>
                Add To Cart
            </button>
            <div className={sliderClass}>
                {text}
            </div>
        </>

    )
}

export default WithPopOver(CardButton)