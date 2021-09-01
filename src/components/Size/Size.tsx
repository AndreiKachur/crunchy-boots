import React from 'react'
import '../Item/Item.scss';
import { SizeType } from '../../types/db-types'

interface PropTypes {
    item: SizeType
    chooseSize: any
    buttonClass: string
}

function Size({ chooseSize, item, buttonClass }: PropTypes) {
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
