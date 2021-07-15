import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Button from '../Button';
import Size from '../Size';
import './Item.scss';

export default class Item extends Component {

    sizes = this.props.item.sizes;

    createClassesArray(){
        let classesArray = []
        for (let i = 0; i < this.sizes.length; i++) {
            classesArray.push('item__size')
        }
        return classesArray
    }
    
    state = {
        sizesWithClass: this.createClassesArray()
    }
    
    chooseSize = (i) => {
        let newClasses = this.createClassesArray()
        const sizes = this.state.sizesWithClass
        const newItem = 'item__size item__size_checked'
        this.setState(() => ({ sizesWithClass: [...newClasses.slice(0, i), newItem, ...newClasses.slice(i + 1)]}))
        this.props.addSize(this.sizes[i].size)
    }

        render() {
        const { item, addToCart } = this.props
        let { title, price, url, category, sex, sizes } = item;

        return (
            <div className='item'>
                <img className='item__img' src={url} alt={title} />
                <div className='item__columns'>
                    <div className='item__text'>
                        <li>{title}</li>
                        <li>Category: {category}</li>
                        <li>Sex: {sex}</li>
                        <li>Price: {price}$</li>
                    </div>
                    <div className='item__sizes'>
                        {sizes.map((item, index) => {
                            return (
                                <Size
                                    key={index}
                                    buttonClass = {this.state.sizesWithClass[index]}
                                    item={item}
                                    chooseSize={() => this.chooseSize (index)}
                                />
                            )
                        })}
                    </div>
                </div>
                <Button addToCart={addToCart} />
            </div>
        )
    }
}
