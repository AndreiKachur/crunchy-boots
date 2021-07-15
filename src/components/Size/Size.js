import React, { useState } from 'react'
import '../Item/Item.scss';

function Size({ chooseSize, item, buttonClass }) {
    const {size, rest} = item
    
    return (
        <button
            disabled={rest <= 0 ? true : false}
            className={buttonClass}
            onClick={chooseSize}
        >
            {size}
        </button>
    )
}

export default Size
