import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions.js'
import CartEmpty from '../CartEmpty'
import CartItem from '../CartItem'
import './Cart.scss';

function Cart({ cart, onDelete, changeCart }) {
    if (cart.length === 0) { return <CartEmpty /> }
    return (
        <>
            <div className='cart-wrapper'>
                {cart.map(item => {
                    return (
                        <CartItem
                            key={item.idSize}
                            item={item}
                            onDelete={() => onDelete(item.idSize)}
                            addToCart={() => changeCart(item.id, item.idSize, true)}
                            deleteFromCart={() => changeCart(item.id, item.idSize, true, -1)}
                        />
                    )
                })}
            </div>

        </>
    )
}
const mapStateToProps = state => ({ cart: state.cart })
export default connect(mapStateToProps, actions)(Cart)
