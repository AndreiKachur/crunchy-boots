import { RiDeleteBin2Line } from 'react-icons/ri'
import './CartItem.scss';

function CartItem({ item, onDelete }: any) {
    const { title, price, url, amount, actualSize } = item;
    const pieces = amount > 1 ? `${price}*${amount} items` : '1 item'
    const itemSum = amount > 1 ? `${price * amount}` : price
    return (
        <div className={onDelete
            ? 'cart-item'
            : 'cart-item cart-item__order'}>
            <img className='cart-item__img' src={url[0]} alt={title} />
            <div className='cart-item__title'>
                {title}
            </div>
            <div className='cart-item__pieces' >
                {pieces}
            </div>
            <div className='cart-item__size' >
                Size: {actualSize}
            </div>
            <div className={onDelete
                ? 'cart-item__price'
                : 'cart-item__price cart-item__price__order'}>
                {itemSum}$
            </div>
            {onDelete && <div className='cart-item__actions'>
                <RiDeleteBin2Line
                    className='cart-item__delete'
                    onClick={onDelete}
                />
            </div>}
        </div>
    )
}

export default CartItem
