import React from 'react';
import './Button.scss'

function Button({addToCart}) {
    return (
        <div className='btn-wrapper'>
            <button className='btn' onClick={addToCart}>
                Add To Cart
            </button>
        </div>

    )
}

export default Button
