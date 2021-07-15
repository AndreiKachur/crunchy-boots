const bootsLoaded = (newBoots) => {
    return {
        type: 'BOOTS_LOADED',
        payload: newBoots
    }
}
const bootsRequested = () => ({ type: 'BOOTS_REQUESTED' })
const changeCart = (id, idSize = 0, cartButton = false, num = 1) => ({
    type: 'CHANGE_CART',
    payload: id,
    idSize: idSize,
    cartButton: cartButton,
    number: num
})
const addSize = (size, itemId) => ({ type: 'CHECK_SIZE', size: size, itemId: itemId })
const onDelete = (idSize) => ({ type: 'DELETE_FROM_CART', idSize: idSize })

export {
    bootsLoaded,
    bootsRequested,
    changeCart,
    addSize,
    onDelete,
}