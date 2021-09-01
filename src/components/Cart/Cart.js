import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import CartEmpty from '../CartEmpty'
import CartItem from '../CartItem'
import Form from '../Form/Form'
import './Cart.scss';

function Cart({ cart, onDelete, ordered }) {

    const [openForm, setOpenForm] = useState(false)

    useEffect(() => {
        document.addEventListener("keydown", showForm);
        return () => {
            document.removeEventListener("keydown", showForm);
        }
    })

    const showForm = (e) => {
        if (e.key === 'Escape' || e.type === 'click') {
            setOpenForm(!openForm)
        }
    }
    if (ordered) return <Form />
    if (cart.length === 0) { return <CartEmpty /> }
    if (openForm) {
        return (
            <>
                <div className='modal' onClick={showForm}>
                </div>
                <Form showForm={showForm} />
            </>
        )
    }
    return (
        <>
            <div className='cart-wrapper'>
                {cart.map(item => {
                    return (
                        <CartItem
                            key={item.idSize}
                            item={item}
                            onDelete={() => onDelete(item.idSize)}
                        />
                    )
                })}
                <button className='cart-button' onClick={() => setOpenForm(!openForm)}>
                    Place order
                </button>
            </div>

        </>
    )
}
const mapStateToProps = state => ({
    cart: state.load.cart,
    ordered: state.load.ordered
})
export default connect(mapStateToProps, actions)(Cart)
