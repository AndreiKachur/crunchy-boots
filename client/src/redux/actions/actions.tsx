const changeCart = (id: number, idSize = 0, actualRest = 0,
    cartButton = false, num = 1) => ({
        type: 'CHANGE_CART',
        id: id,
        idSize: idSize,
        actualRest: actualRest,
        cartButton: cartButton,
        number: num
    })

const addSize = (size: number, itemId: number) => ({
    type: 'CHECK_SIZE',
    size: size,
    itemId: itemId,
})
const onDelete = (idSize: number) => ({ type: 'DELETE_FROM_CART', idSize: idSize })

const browsePics = (id = 0) => ({ type: 'BROWSE_PICS', id: id })


export {
    changeCart,
    addSize,
    onDelete,
    browsePics,
}