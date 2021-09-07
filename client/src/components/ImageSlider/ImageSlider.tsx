import React, { useEffect, useCallback } from 'react'
import Slider from "react-slick";
import { DbItem } from '../../types/db-types'
import './ImageSlider.scss'

interface PropsType {
    item: DbItem
    picsSlider: boolean
    browsePics: () => void
}

function ImageSlider({
    item: { id, url, title },
    picsSlider,
    browsePics }: PropsType) {

    const closeImgs = useCallback((e) => {
        if (e.key === 'Escape' || e.type === 'click') {
            browsePics()
        }
    }, [browsePics])

    useEffect(() => {
        if (picsSlider) {
            document.addEventListener('keydown', closeImgs)
            document.querySelector('body')!.style.overflowY = 'hidden'
        } else {
            document.removeEventListener('keydown', closeImgs)
            document.querySelector('body')!.style.overflowY = 'unset'
        }
    }, [picsSlider, closeImgs])

    const hiddenClass = !picsSlider ? 'browse-pics_hidden' : ''

    return (
        <div className={hiddenClass}>
            <div className='browse-pics'>
                <span className='browse-pics__close-btn'
                    onClick={closeImgs}>×</span>
                <Slider autoplay={true} autoplaySpeed={2000}>
                    {url.map((el, i) => {
                        return (
                            <img className='browse-pics__img'
                                key={`${id}${i}`}
                                src={el}
                                alt={`${title} img${i}`} />
                        )
                    })}
                </Slider>
            </div>
            <div className='browse-pics__modal' onClick={closeImgs}></div>
        </div>
    )
}

export default ImageSlider

