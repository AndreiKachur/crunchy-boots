import { TL } from '../../types/store-types';

const changeCart = (id: number, idSize = 0, actualRest = 0,
    cartButton = false, num = 1) => ({
        type: TL.CHANGE_CART,
        id: id,
        idSize: idSize,
        actualRest: actualRest,
        cartButton: cartButton,
        number: num
    })
const setEmptyCart = () => ({ type: TL.EMPTY_CART })

const addSize = (size: number, itemId: number) => ({
    type: TL.CHECK_SIZE,
    size: size,
    itemId: itemId,
})
const onDelete = (idSize: number) => ({ type: TL.DELETE_FROM_CART, idSize: idSize })

const browsePics = (id = 0) => ({ type: TL.BROWSE_PICS, id: id })


export {
    changeCart,
    addSize,
    onDelete,
    browsePics,
    setEmptyCart
}