import React from 'react'
import './FilterButton.scss'

interface FilterBtnType {
    clazz: string;
    title: string;
    onToggle: () => void
}

const FilterButton: React.FC<FilterBtnType> = ({ title, onToggle, clazz }) => {

    return (
        <button className={clazz} onClick={onToggle}>
            {title}
        </button>
    )
}

export default FilterButton
