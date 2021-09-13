import CartItem from '../CartItem'

function Order({ cart }) {
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
