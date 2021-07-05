import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CardsSlider.scss';
import Sneaker from './img/01.webp'
import Sneaker02 from './img/02.jpg'
import Sneaker03 from './img/03.jpg'

export default class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            draggable: true,
            // autoplaySpeed: 5000,
            // autoplay: true,
            // responsive: [array-breakpoints],
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
        };
        return (
            <div>
                <Slider {...settings} className='slick-list'>
                    <div className='slider-card'>
                        <img className='slider-card__img' src={Sneaker} alt='sneaker' />
                        <div className='slider-card__text'>
                            <li>Sneaker</li>
                            <li>Price: 10$</li>
                        </div>
                    </div>
                    <div className='slider-card'>
                        <img className='slider-card__img' src={Sneaker02} alt='sneaker02-1' />
                        <div className='slider-card__text'>
                            <li>Sam Smith</li>
                            <li>Price: 15$</li>
                        </div>
                    </div>
                    <div className='slider-card'>
                        <img className='slider-card__img' src={Sneaker03} alt='sneaker' />
                        <div className='slider-card__text'>
                            <li>Smith Originals</li>
                            <li>Price: 17$</li>
                        </div>
                    </div>
                    <div className='slider-card'>
                        <img className='slider-card__img' src={Sneaker} alt='sneaker' />
                        <div className='slider-card__text'>
                            <li>Sneaker</li>
                            <li>Price: 10$</li>
                        </div>
                    </div>
                    <div className='slider-card'>
                        <img className='slider-card__img' src={Sneaker02} alt='sneaker02-1' />
                        <div className='slider-card__text'>
                            <li>Sam Smith</li>
                            <li>Price: 15$</li>
                        </div>
                    </div>
                    <div className='slider-card'>
                        <img className='slider-card__img' src={Sneaker03} alt='sneaker' />
                        <div className='slider-card__text'>
                            <li>Smith Originals</li>
                            <li>Price: 17$</li>
                        </div>
                    </div>

                </Slider>
            </div >
        );
    }
}
