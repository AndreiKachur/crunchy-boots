import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/reducers'
import Slider from "react-slick";
import { DbItem } from '../../types/db-types'
import Spinner from '../Spinner'
import { browsePics, addSize, changeCart } from '../../redux/actions/actions'
import Card from "../Card";
import ImageSlider from "../ImageSlider";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CardsSlider.scss';

function CardsSlider() {

    const dispatch = useDispatch()
    const { load: { boots, loading, ordered },
        pics: { picsSlider, picId } } = useTypedSelector(s => s)

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
                browsePics={() => dispatch(browsePics)}
                picsSlider={picsSlider}
            />
            <div className='slider-wrapper'>
                <Slider {...settings} className='slick-list'>
                    {boots.map((item: DbItem) => <Card
                        key={item.id}
                        item={item}
                        ordered={ordered}
                        browseImgs={() => dispatch(browsePics(item.id - 1))}
                        addToCart={(actualRest: number) => dispatch(
                            changeCart(item.id, item.idSize, actualRest))}
                        addSize={(size: number) => dispatch(addSize(size, item.id))}
                    />)}
                </Slider>
            </div >
        </>
    );
}

export default CardsSlider
