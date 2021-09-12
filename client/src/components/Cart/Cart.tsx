import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onDelete } from '../../redux/actions/actions'
import { useTypedSelector } from '../../redux/reducers'
import CartEmpty from '../CartEmpty'
import CartItem from '../CartItem'
import './Cart.scss';

function Cart() {

    const [openForm, setOpenForm] = useState(false)
    const dispatch = useDispatch()
    const { load: { cart }, register: { userId } } = useTypedSelector(s => s)

    if (cart.length === 0) { return <CartEmpty /> }
    if (openForm) {
        if (!userId) {
            return <Redirect to='/register' />
        } else {
            return <Redirect to='/profile' />
        }
    }

    return (
        <>
            <div className='cart-wrapper'>
                {cart.map((item: any) => {
                    return (
                        <CartItem
                            key={item.idSize}
                            item={item}
                            onDelete={() => dispatch(onDelete(item.idSize))}
                        />
                    )
                })}
                <button className='cart-button' onClick={() => setOpenForm(true)}>
                    Place order
                </button>
            </div>

        </>
    )
}

export default Cart
