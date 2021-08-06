import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Item from '../Item';
import FilterBar from '../FilterBar';
import { WithBootsService } from '../Hoc';
import * as actions from '../../actions/actions.js'
import ImageSlider from "../ImageSlider";
import Spinner from '../Spinner'
import './ItemsList.scss'

function ItemsList({ Bootsservice, bootsLoaded, bootsRequested, boots,
    loading, changeCart, addSize, ordered, browsePics, picsSlider, picId }) {
    const [sex, setSex] = useState('all')
    const [type, setType] = useState('all')

    useEffect(() => {
        if (boots.length === 0) {
            bootsRequested();
            Bootsservice.getBootsItems()
                .then(boots => bootsLoaded(boots))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSex = s => s === sex ?
        setSex('all') : setSex(s)

    const onType = t => t === type ?
        setType('all') : setType(t)

    if (loading) return <Spinner />

    return (
        <>
            <ImageSlider
                item={boots[picId]}
                browsePics={browsePics}
                picsSlider={picsSlider}
            />
            <FilterBar
                sex={sex}
                type={type}
                onSex={s => onSex(s)}
                onType={t => onType(t)}
            />
            <main className='items-list'>
                {
                    boots.map(item => {
                        if (sex === item.sex.toLowerCase() || sex === 'all') {
                            if (type === item.category.toLowerCase() ||
                                type === item.boost ||
                                type === 'all') {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        ordered={ordered}
                                        browseImgs={() => browsePics(item.id - 1)}
                                        addToCart={(actualRest) => {
                                            changeCart(item.id, item.idSize, actualRest)
                                        }}
                                        addSize={(size) => addSize(size, item.id)}
                                    />
                                )
                            } else { return null }
                        } else { return null }
                    })
                }
            </main>
        </>
    )
}


const mapStateToProps = (state) => ({
    boots: state.boots,
    loading: state.loading,
    ordered: state.ordered,
    picsSlider: state.picsSlider,
    picId: state.picId
})
export default WithBootsService()(connect(mapStateToProps, actions)(ItemsList))
