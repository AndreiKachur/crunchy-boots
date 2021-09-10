import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/reducers'
import Item from '../Item';
import FilterBar from '../FilterBar';
import { changeCart, addSize, browsePics } from '../../redux/actions/actions'
import ImageSlider from "../ImageSlider";
import { DbItem } from '../../types/db-types'
import Spinner from '../Spinner'
import './ItemsList.scss'

const ItemsList: React.FC = () => {

    const [gender, setGender] = useState('all')
    const [type, setType] = useState('all')

    const dispatch = useDispatch()

    const { load: { boots, loading, ordered },
        pics: { picId, picsSlider } } = useTypedSelector(s => s)

    const onFilter = (filterOption: string, argType: string) => {
        let setFunc, stateType

        if (argType === 'gender') {
            setFunc = setGender
            stateType = gender
        } else {
            setFunc = setType
            stateType = type
        }

        filterOption === stateType
            ? setFunc('all') : setFunc(filterOption)
    }

    if (loading) return <Spinner />

    return (
        <>
            <ImageSlider
                item={boots[picId]}
                browsePics={() => dispatch(browsePics())}
                picsSlider={picsSlider}
            />
            <FilterBar
                gender={gender}
                type={type}
                onFilter={(filterOption, type) => onFilter(filterOption, type)}
            />
            <main className='items-list'>

                {
                    boots.map((item: DbItem) => {
                        if (gender === item.gender.toLowerCase() || gender === 'all') {
                            if (type === item.category.toLowerCase() ||
                                type === item.boost ||
                                type === 'all') {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        ordered={ordered}
                                        browseImgs={() => dispatch(browsePics(item.id - 1))}
                                        addToCart={(actualRest: number) => {
                                            dispatch(changeCart(item.id, item.idSize, actualRest))
                                        }}
                                        addSize={(size: number) => dispatch(addSize(size, item.id))}
                                    />
                                )
                            } else { return null }
                        } else { return null }
                    })
                }
                {/* </Fade> */}
            </main>
        </>
    )
}

export default ItemsList
