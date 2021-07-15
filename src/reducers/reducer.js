const initialState = {
    boots: [],
    loading: true,
    error: false,
    cart: [],
}

const reducer = (state = initialState, actions) => {
    const { cart, boots } = state
    const id = actions.payload
    const idSize = actions.idSize
    const idx = cart.findIndex(el => el.idSize === idSize)
    let newBoots = []
    let newItem = {}

    switch (actions.type) {
        case 'BOOTS_LOADED':
            return {
                ...state,
                boots: actions.payload,
                loading: false
            }
        case 'BOOTS_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'CHANGE_CART':
            
            if(idSize === 0) return state

            let addedYet = Boolean(cart.find(el => el.idSize === idSize))
            //check rest of amount
            const newBoot = boots[id - 1]
            const newBootEl = newBoot.sizes.find(el => el.id === idSize)

            if(newBootEl.maxRest === undefined) newBootEl.maxRest = newBootEl.rest

            newBootEl.rest = newBootEl.rest - actions.number

            if (actions.cartButton && newBootEl.rest < 1) {
                newBootEl.rest = 1
                return state
            }
            if (newBootEl.rest < 0) {
                newBootEl.rest = 0
                return state
            }
            if (newBootEl.rest > newBootEl.maxRest) {
                newBootEl.rest = newBootEl.maxRest
                return state
            }

            newBoots = [...boots.slice(0, id - 1), newBoot, ...boots.slice(id)]

            if (actions.cartButton) {
                newItem = cart.find(el => el.idSize === idSize)
            } else {
                newItem = JSON.parse(JSON.stringify(boots[id - 1]))
            }

            if (newItem.actualSize === 0) { return state }

            if (addedYet) {
                cart.forEach(el => {
                    if (el.idSize === idSize) {
                        newItem.amount = el.amount + actions.number;
                        if (newItem.amount < 1) newItem.amount = 1
                    }
                }
                )
                return {
                    ...state,
                    boots: newBoots,
                    cart: [...cart.slice(0, idx), newItem, ...cart.slice(idx + 1)]
                }
            } else {
                newItem.amount = 1
                return {
                    ...state,
                    boots: newBoots,
                    cart: [...cart, newItem]
                }
            }
        case 'DELETE_FROM_CART':

            const newCart = [...cart.slice(0, idx), ...cart.slice(idx + 1)]
            console.log(newCart)
            return {
                ...state,
                cart: newCart
            }

        case 'CHECK_SIZE':
            const itemId = actions.itemId
            newItem = boots[itemId - 1]
            newItem.actualSize = actions.size
            newItem.idSize = +('' + itemId + actions.size)

            return {
                ...state,
                boots: [...boots.slice(0, itemId - 1),
                    newItem,
                ...boots.slice(itemId)]
            }

        default: return state
    }
}

export default reducer