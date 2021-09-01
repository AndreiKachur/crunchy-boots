import React from 'react';
import './ItemButton.scss';
import { WithPopOver } from '../Hoc';
// import Fade from 'react-reveal/Fade';

function ItemButton({ onCart, pop, text }: any) {

    const itemClass = pop ? 'item-btn__pop-over' :
        'item-btn__pop-over item-btn__pop-over_hidden'

    return (
        <div className='item-btn-wrapper'>
            {/* <Fade bottom> */}
            <button className='item-btn' onClick={onCart}>
                Add To Cart
            </button>
            {/* </Fade> */}
            <div className={itemClass}>
                {text}
            </div>
        </div>
    )
}

export default WithPopOver(ItemButton)
