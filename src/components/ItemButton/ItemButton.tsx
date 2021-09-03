import './ItemButton.scss';
import { WithPopOver } from '../Hoc';

function ItemButton({ onCart, pop, text }: any) {

    const itemClass = pop ? 'item-btn__pop-over' :
        'item-btn__pop-over item-btn__pop-over_hidden'

    return (
        <div className='item-btn-wrapper'>

            <button className='item-btn' onClick={onCart}>
                Add To Cart
            </button>

            <div className={itemClass}>
                {text}
            </div>
        </div>
    )
}

export default WithPopOver(ItemButton)
