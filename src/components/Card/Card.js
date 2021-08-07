import React from 'react'
import Size from '../Size';
import CardButton from './CardButton'
import Fade from 'react-reveal/Fade';
import { WithSize } from '../Hoc'
import './Card.scss';

function Card({ item, addToCart, actualRest, checked, sizesWithClass, chooseSize,
    changeActualRest, collectionLabel, topLabel, ordered, browseImgs }) {

    let { title, price, url, sizes, id, gender } = item;

    return (

        <Fade bottom cascade>
            <div className='slider-card'
                key={id}>
                {collectionLabel}
                {topLabel}
                <div className='slider-card__img-wrapper'>
                    <img className='slider-card__img'
                        src={url[0]} alt={title}
                        onClick={browseImgs}
                    />
                </div>
                <div className='slider-card__column'>
                    <div className='slider-card__text'>
                        <li>{title}</li>
                        <li>{gender}</li>
                        <li>Price: {price}$</li>
                    </div>
                    <div className='card__sizes'>
                        {sizes.map((item, index) => {
                            return (
                                <Size
                                    key={index}
                                    buttonClass={sizesWithClass[index]}
                                    item={item}
                                    chooseSize={(rest) => chooseSize(index, rest)}
                                />
                            )
                        })}
                    </div>
                    <CardButton
                        className='slider-card__btn'
                        addToCart={() => addToCart(changeActualRest())}
                        actualRest={actualRest}
                        checked={checked}
                        ordered={ordered}
                    />
                </div>
            </div>
        </Fade>
    )
}

export default WithSize(Card, 'card__size', 'slider-card__label')