import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onDelete } from '../../redux/actions/actions'
import { useTypedSelector } from '../../redux/reducers'
import CartEmpty from '../CartEmpty'
import CartItem from '../CartItem'
import Form from '../Form/Form'
import './Cart.scss';

function Cart() {

    const [openForm, setOpenForm] = useState(false)
    const dispatch = useDispatch()
    const { cart, ordered } = useTypedSelector(s => s.load)

    useEffect(() => {
        document.addEventListener("keydown", closeFormByKey);
        return () => {
            document.removeEventListener("keydown", closeFormByKey);
        }
    })

    const closeFormByKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpenForm(false)
    }
    const closeForm = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.type === 'click') setOpenForm(false)
    }

    if (ordered) return <Form closeForm={closeForm} />
    if (cart.length === 0) { return <CartEmpty /> }
    if (openForm) {
        return (
            <>
                <div className='modal' onClick={closeForm}></div>
                <Form closeForm={closeForm} />
            </>
        )
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
