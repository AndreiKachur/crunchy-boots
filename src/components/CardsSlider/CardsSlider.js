import React from "react";
import { connect } from 'react-redux'
import Slider from "react-slick";
import { WithBootsService } from '../Hoc';
import Spinner from '../Spinner'
import * as actions from '../../actions/actions.js'
import Card from "../Card";
import ImageSlider from "../ImageSlider";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CardsSlider.scss';

function CardsSlider({ boots, loading, changeCart, addSize,
    ordered, browsePics, picsSlider, picId }) {

    if (loading) return <Spinner />

    const settings = {
        dots: true,
        infinite: true,
        draggable: true,
        // autoplaySpeed: 10000,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ],
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (
        <>
            <ImageSlider
                item={boots[picId]}
                browsePics={browsePics}
                picsSlider={picsSlider}
            />
            <div className='slider-wrapper'>
                <Slider {...settings} className='slick-list'>
                    {boots.map(item => <Card
                        key={item.id}
                        item={item}
                        ordered={ordered}
                        browseImgs={() => browsePics(item.id - 1)}
                        addToCart={(actualRest) => changeCart(item.id, item.idSize, actualRest)}
                        addSize={(size) => addSize(size, item.id)}
                    />)}
                </Slider>
            </div >
        </>
    );
}

const mapStateToProps = (state) => ({
    boots: state.boots,
    loading: state.loading,
    ordered: state.ordered,
    picsSlider: state.picsSlider,
    picId: state.picId
})
export default WithBootsService()(connect(mapStateToProps, actions)(CardsSlider))
