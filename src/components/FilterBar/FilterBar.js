import React from 'react'
import FilterButton from '../FilterButton'
import Fade from 'react-reveal/Fade';
import './FilterBar.scss'

function FilterBar({ onFilter, gender, type }) {

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
                <Fade bottom>
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
                </Fade>
                <Fade bottom>
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
                </Fade>
            </section>
        </div>
    )
}

export default FilterBar
