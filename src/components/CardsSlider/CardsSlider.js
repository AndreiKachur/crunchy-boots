import React, { Component } from "react";
import { connect } from 'react-redux'
import Slider from "react-slick";
import WithBootsService from '../Hoc';
import Button from "../Button";
import * as actions from '../../actions/actions.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CardsSlider.scss';

class ImageSlider extends Component {

    render() {
        const { boots, loading, changeCart:addToCart } = this.props;

        if (loading) return <h2 style={{ margin: '5rem' }}>Loading...</h2>

        const settings = {
            dots: true,
            infinite: true,
            draggable: true,
            // autoplaySpeed: 5000,
            // autoplay: true,
            // responsive: [array-breakpoints],
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Slider {...settings} className='slick-list'>
                    {boots.map(item => {
                        const { title, price, url, id } = item

                        return (
                            <div className='slider-card'
                                key={id}>
                                <img className='slider-card__img' src={url} alt={title} />
                                <div className='slider-card__column'>
                                    <div className='slider-card__text'>
                                        <li>{title}</li>
                                        <li>Price: {price}$</li>
                                    </div>
                                    <button
                                        className='slider-card__btn'
                                        onClick={() => addToCart(id)}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    boots: state.boots,
    loading: state.loading
})
export default WithBootsService()(connect(mapStateToProps, actions)(ImageSlider))
