import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../Item';
import FilterBar from '../FilterBar';
import { WithBootsService } from '../Hoc';
import * as actions from '../../actions/actions.js'
import ImageSlider from "../ImageSlider";
import Spinner from '../Spinner'
import './ItemsList.scss'

class ItemsList extends Component {

    state = {
        sex: `all`,
        type: `all`,
    }
    componentDidMount() {
        const { Bootsservice, bootsLoaded, bootsRequested, boots } = this.props
        if (boots.length === 0) {
            bootsRequested();
            Bootsservice.getBootsItems()
                .then(boots => bootsLoaded(boots))
        }
    }
    onSex = sex => sex === this.state.sex ?
        this.setState({ sex: 'all' }) :
        this.setState({ sex: sex })
    onType = type => type === this.state.type ?
        this.setState({ type: 'all' }) :
        this.setState({ type: type })

    render() {
        const { boots, loading, changeCart, addSize,
            ordered, browsePics, picsSlider, picId } = this.props;
        const { sex, type } = this.state

        if (loading) return <Spinner />

        return (
            <>
                <ImageSlider
                    item={boots[picId]}
                    browsePics={browsePics}
                    picsSlider={picsSlider}
                />
                <FilterBar
                    {...this.state}
                    onSex={sex => this.onSex(sex)}
                    onType={type => this.onType(type)}
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
                                }
                            }
                        })
                    }
                </main>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    boots: state.boots,
    loading: state.loading,
    ordered: state.ordered,
    picsSlider: state.picsSlider,
    picId: state.picId
})
export default WithBootsService()(connect(mapStateToProps, actions)(ItemsList))
