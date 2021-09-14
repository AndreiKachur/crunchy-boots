import { StateType, ActionsType, TL } from '../../types/store-types'
import { CartItem, CartSizeType } from '../../types/db-types'

const initialState: StateType = {
    boots: [],
    loading: true,
    error: false,
    cart: []
}

let findIdx: (cart: CartItem[], idSize: number) => number
findIdx = (cart, idSize) => cart.findIndex((el) => el.idSize === idSize)

const mainReducer = (
    state = initialState,
    actions: ActionsType): StateType => {

    const { cart, boots } = state

    let idx, id, idSize: number, newBoots,
        newBoot: CartItem, newItem: CartItem

    switch (actions.type) {
        case TL.BOOTS_LOADED:

            return {
                ...state,
                boots: actions.payload,
                loading: false,
            }
        case TL.BOOTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case TL.CHANGE_CART:

            id = actions.id
            idSize = actions.idSize
            idx = findIdx(cart, idSize)

            if (idSize === 0) return state

            const addedYet = Boolean(cart.find((el: CartItem) => el.idSize === idSize))

            newBoot = boots[id - 1]

            const newBootEl = newBoot.sizes.find((el: CartSizeType) => el.id === idSize)

            if (!newBootEl) return state

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
                newItem = cart.find((el: CartItem) => el.idSize === idSize)
            } else {
                newItem = JSON.parse(JSON.stringify(boots[id - 1]))
            }

            if (newItem.actualSize === 0) { return state }

            if (addedYet) {
                cart.forEach((el: CartItem) => {
                    if (el.idSize === idSize) {
                        if (el.amount) {
                            newItem.amount = el.amount + actions.number;
                        }
                        if (newItem.amount === undefined || newItem.amount < 1) {
                            newItem.amount = 1
                        }
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
        case TL.DELETE_FROM_CART:
            idSize = actions.idSize
            idx = findIdx(cart, idSize)

            newBoot = cart.find((el: CartItem) => {
                let res = false
                el.sizes.forEach((el: CartSizeType) => {
                    if (el.id === idSize) {
                        return res = true
                    }
                })
                return res
            })
            const newBootSize = newBoot.sizes.find((el: CartSizeType) => el.id === idSize)

            if (!newBootSize) return state

            newBootSize.rest = newBootSize.maxRest
            idSize > 999 ?
                id = +('' + idSize).slice(0, 2) :
                id = +('' + idSize).slice(0, 1)

            return {
                ...state,
                cart: [...cart.slice(0, idx), ...cart.slice(idx + 1)],
                boots: [...boots.slice(0, id - 1), newBoot, ...boots.slice(id)]
            }
        case TL.CHECK_SIZE:
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
        case TL.EMPTY_CART:
            return {
                ...state,
                cart: []
            }

        default: return state
    }
}

export default mainReducer