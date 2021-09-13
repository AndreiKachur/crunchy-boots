import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onDelete, setEmptyCart } from '../../redux/actions/actions'
import { useTypedSelector } from '../../redux/reducers'
import { getOrders, setOrder } from '../../redux/actions/actions-reg'
import CartEmpty from '../CartEmpty'
import CartItem from '../CartItem'
import './Cart.scss';

function Cart() {

    const [openForm, setOpenForm] = useState(false)
    const dispatch = useDispatch()
    const { load: { cart }, register: { userId, placeOrder } } = useTypedSelector(s => s)

    const sendOrder = async () => {
        setOpenForm(true)
        if (userId) {
            dispatch(setOrder(false))

            await fetch('/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    userId: userId,
                    cart: cart
                })
            })
                .then(res => res.json())
                .then(orders => {
                    dispatch(getOrders(orders))
                    dispatch(setEmptyCart())
                })
                .catch(e => console.log(e))
        } else { dispatch(setOrder()) }

    }

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
                <p><b>{userId && placeOrder
                    && `Registration was completed successfully.
                            Now you can place your order.`}</b></p>
                {cart.map((item: any) => {
                    return (
                        <CartItem
                            key={item.idSize}
                            item={item}
                            onDelete={() => dispatch(onDelete(item.idSize))}
                        />
                    )
                })}
                <button className='cart-button' onClick={sendOrder}>
                    Place order
                </button>
            </div>

        </>
    )
}

export default Cart
