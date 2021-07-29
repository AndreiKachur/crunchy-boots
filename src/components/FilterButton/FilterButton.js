import React from 'react'
import Fade from 'react-reveal/Fade';
import './FilterButton.scss'

function FilterButton({ title, onToggle, clazz }) {

    return (
        <Fade bottom cascade>
            <button className={clazz} onClick={onToggle}>
                {title}
            </button>
        </Fade>
    )
}

export default FilterButton
