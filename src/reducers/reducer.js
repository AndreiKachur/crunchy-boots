const initialState = {
    boots: [],
    loading: true,
    error: false,
    cart: [],
    ordered: false,
    picsSlider: false,
    picId: 0
}

const reducer = (state = initialState, actions) => {

    const { cart, boots, ordered } = state
    let id = actions.id
    const idSize = actions.idSize
    const idx = cart.findIndex(el => el.idSize === idSize)
    let newBoots, newBoot = []
    let newItem = {}

    switch (actions.type) {
        case 'BOOTS_LOADED':
            return {
                ...state,
                boots: actions.payload,
                loading: false,
            }
        case 'BOOTS_REQUESTED':
            return {
                ...state,
                loading: true,
            }
        case 'CHANGE_CART':

            if (idSize === 0 || ordered) return state

            const addedYet = Boolean(cart.find(el => el.idSize === idSize))

            newBoot = boots[id - 1]

            const newBootEl = newBoot.sizes.find(el => el.id === idSize)

            if (newBootEl.maxRest === undefined) {
                newBootEl.maxRest = newBootEl.rest
            }
            newBootEl.rest = newBootEl.rest - actions.number

            if (actions.cartButton && newBootEl.rest < 1) {
                newBootEl.rest = 1
                return state
            }
            if (newBootEl.rest < 0 || actions.actualRest === 0) {
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

            newBoot = boots.find(el => {
                let res = false
                el.sizes.forEach(el => {
                    if (el.id === idSize) {
                        return res = true
                    }
                })
                return res
            })
            const newBootSize = newBoot.sizes.find(el => el.id === idSize)
            newBootSize.rest = newBootSize.maxRest
            idSize > 999 ?
                id = +('' + idSize).slice(0, 2) :
                id = +('' + idSize).slice(0, 1)

            return {
                ...state,
                cart: [...cart.slice(0, idx), ...cart.slice(idx + 1)],
                boots: [...boots.slice(0, id - 1), newBoot, ...boots.slice(id)]
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
        case 'PLACE_ORDER':
            return {
                ...state,
                ordered: true
            }
        case 'BROWSE_PICS':
            return {
                ...state,
                picsSlider: !state.picsSlider,
                picId: id
            }
        default: return state
    }
}

export default reducer