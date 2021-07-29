import React from 'react'
import FilterButton from '../FilterButton'
import Fade from 'react-reveal/Fade';
import './FilterBar.scss'

function FilterBar({ onType, onSex, sex, type }) {

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
                            const clazz = item === sex ?
                                'filter-btn filter-btn_checked' :
                                'filter-btn'
                            return (
                                <FilterButton
                                    clazz={clazz}
                                    title={item}
                                    onToggle={() => onSex(item)} />)
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
                                    clazz={clazz}
                                    title={item}
                                    onToggle={() => onType(item)} />)
                        })}
                    </div>
                </Fade>
            </section>
        </div>
    )
}

export default FilterBar
