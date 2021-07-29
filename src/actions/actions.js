const bootsLoaded = (newBoots) => {
    return {
        type: 'BOOTS_LOADED',
        payload: newBoots
    }
}
const bootsRequested = () => ({ type: 'BOOTS_REQUESTED' })

const changeCart = (id, idSize = 0, actualRest = 0, cartButton = false, num = 1) => ({
    type: 'CHANGE_CART',
    id: id,
    idSize: idSize,
    actualRest: actualRest,
    cartButton: cartButton,
    number: num
})
const addSize = (size, itemId) => ({
    type: 'CHECK_SIZE',
    size: size,
    itemId: itemId,
})
const onDelete = (idSize) => ({ type: 'DELETE_FROM_CART', idSize: idSize })

const placeOrder = () => ({ type: 'PLACE_ORDER' })

const browsePics = (id = 0) => ({ type: 'BROWSE_PICS', id: id })

export {
    bootsLoaded,
    bootsRequested,
    changeCart,
    addSize,
    onDelete,
    placeOrder,
    browsePics
}