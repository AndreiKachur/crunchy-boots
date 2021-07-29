import React, { Component } from 'react'
import Slider from "react-slick";
import './ImageSlider.scss'

class ImageSlider extends Component {

    closeImgs = (e) => {
        if (e.key === 'Escape' || e.type === 'click') this.props.browsePics()
    }
    componentDidUpdate() {
        if (this.props.picsSlider) {
            document.addEventListener('keydown', this.closeImgs)
            document.querySelector('body').style.overflowY = 'hidden'
        } else {
            document.removeEventListener('keydown', this.closeImgs)
            document.querySelector('body').style.overflowY = 'unset'
        }
    }

    render() {
        const { item: { url, title }, picsSlider } = this.props

        const hiddenClass = !picsSlider ? 'browse-pics_hidden' : ''

        return (
            <div className={hiddenClass}>
                <div className='browse-pics'>
                    <span className='browse-pics__close-btn'
                        onClick={this.closeImgs}>×</span>
                    <Slider autoplay={true} autoplaySpeed={2000}>
                        {url.map((el, i) => {
                            return (
                                <img className='browse-pics__img'
                                    src={el}
                                    alt={`${title} img${i}`} />
                            )
                        })}
                    </Slider>
                </div>
                <div className='browse-pics__modal' onClick={this.closeImgs}></div>
            </div>
        )
    }
}



export default ImageSlider
