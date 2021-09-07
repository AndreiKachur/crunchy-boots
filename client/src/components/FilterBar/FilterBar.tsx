import React from 'react'
import FilterButton from '../FilterButton'
import './FilterBar.scss'

interface FilterBarPropsType {
    gender: string;
    type: string;
    onFilter: (filterOption: string, type: string) => void
}

const FilterBar: React.FC<FilterBarPropsType> = ({ onFilter, gender, type }) => {

    const buttonTitles1 = [
        "male",
        "female",
    ]
    const buttonTitles2 = [
        'originals',
        'sport',
        'lifestyle',
        'boost'
    ]

    return (
        <div className='filter-bar__margin'>
            <section className='filter-bar__wrapper'>
                <div className='filter-bar__block'>
                    {buttonTitles1.map(item => {
                        const clazz = item === gender ?
                            'filter-btn filter-btn_checked' :
                            'filter-btn'
                        return (
                            <FilterButton
                                key={`FB-${item}`}
                                clazz={clazz}
                                title={item}
                                onToggle={() => onFilter(item, 'gender')} />)
                    })}
                </div>

                <div className='filter-bar__block'>
                    {buttonTitles2.map(item => {
                        const clazz = item === type ?
                            'filter-btn filter-btn_checked' :
                            'filter-btn'
                        return (
                            <FilterButton
                                key={`FB-${item}`}
                                clazz={clazz}
                                title={item}
                                onToggle={() => onFilter(item, 'type')} />)
                    })}
                </div>
            </section>
        </div>
    )
}

export default FilterBar
