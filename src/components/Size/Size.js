import React from 'react'
import '../Item/Item.scss';

function Size({ chooseSize, item, buttonClass }) {
    const { size, rest } = item

    return (
        <button
            disabled={rest <= 0 ? true : false}
            className={buttonClass}
            onClick={() => chooseSize(rest)}
        >
            {size}
        </button>
    )
}

export default Size
