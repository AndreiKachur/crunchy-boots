import React from 'react'
import CardsSlider from '../CardsSlider'
import ItemsList from '../ItemsList'
import Footer from '../Footer'

import { Fade } from "react-awesome-reveal";
import './Main.scss'

function Main() {
    return (
        <>
            <CardsSlider />
            <div className='img-forum-cut__wrapper img-forum-cut_margin'>
                <Fade direction='up' triggerOnce>
                    <img
                        className='img-forum-cut'
                        src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ruRU/Images/plp-fw-21-women-2880x720_tcm224-724640.jpg' alt='forum-female' />
                </Fade>
            </div>
            <ItemsList />
            <Footer />
        </>
    )
}

export default Main
