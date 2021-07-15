import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../Item';
import WithBootsService from '../Hoc';
import * as actions from '../../actions/actions.js'
import './ItemsList.scss'

class ItemsList extends Component {

    componentDidMount() {
        const { Bootsservice, bootsLoaded, bootsRequested } = this.props
        bootsRequested();
        Bootsservice.getBootsItems()
            .then(boots => bootsLoaded(boots))
    }

    render() {
        const { boots, loading, changeCart, addSize } = this.props;

        if (loading) return <h2 style={{ margin: '5rem' }}>Loading...</h2>
        return (
            <main className='items-list'>
                {boots.map(item => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            addToCart={() => changeCart(item.id, item.idSize)}
                            addSize={(size) => addSize(size, item.id)}
                        />
                    )
                })}
            </main>
        )
    }
}
const mapStateToProps = (state) => ({
    boots: state.boots,
    loading: state.loading
})
export default WithBootsService()(connect(mapStateToProps, actions)(ItemsList))
