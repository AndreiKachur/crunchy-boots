import React from 'react'
// import Fade from 'react-reveal/Fade';
import './FilterButton.scss'

interface FilterBtnType {
    clazz: string;
    title: string;
    onToggle: () => void
}

const FilterButton: React.FC<FilterBtnType> = ({ title, onToggle, clazz }) => {

    return (
        // <Fade bottom cascade>
        <button className={clazz} onClick={onToggle}>
            {title}
        </button>
        // </Fade>
    )
}

export default FilterButton
