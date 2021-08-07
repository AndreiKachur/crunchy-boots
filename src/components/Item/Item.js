import React from 'react'
import ItemButton from '../ItemButton';
import { WithSize } from '../Hoc'
import Fade from 'react-reveal/Fade';
import Size from '../Size';

import './Item.scss';

function Item({
    item, addToCart, actualRest, checked, sizesWithClass, chooseSize,
    changeActualRest, collectionLabel, topLabel, ordered, browseImgs
}) {
    let { title, price, url, category, gender, sizes } = item;

    return (
        <>
            <Fade bottom>
                <Fade bottom cascade>
                    <div className='item'>
                        {collectionLabel}
                        {topLabel}
                        <div className='item__img-wrapper' onClick={browseImgs}>
                            <img className='item__img item__img_hide' src={url[0]} alt={title} />
                            <img className='item__img item__img_bg' src={url[3]} alt={title} />
                        </div>
                        <div className='item__columns'>
                            <div className='item__text'>
                                <li>{title}</li>
                                <li>Category: {category}</li>
                                <li>Gender: {gender}</li>
                                <li>Price: {price}$</li>
                            </div>
                            <div className='item__sizes'>
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
                        </div>
                        <ItemButton
                            addToCart={() => addToCart(changeActualRest())}
                            checked={checked}
                            actualRest={actualRest}
                            ordered={ordered}
                        />
                    </div>
                </Fade>
            </Fade>

        </>
    )
}


export default WithSize(Item, 'item__size', 'item__label')