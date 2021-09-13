import { useTypedSelector } from '../../redux/reducers'
import CartItem from '../CartItem'
// import './Cart.scss';

function Order({ cart }) {
    // const { load: { cart }, register: { userId } } = useTypedSelector(s => s)
    return (
        <>
            <div className='cart-wrapper'>
                {cart.map((item) => {
                    return (
                        <CartItem
                            key={item.idSize}
                            item={item}
                            onDelete={false}
                        />
                    )
                })}
            </div>

        </>
    )
}

export default Order
