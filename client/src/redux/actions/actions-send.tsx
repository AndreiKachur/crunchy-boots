import { Dispatch } from 'redux'
import { ActionsType as RegTypes, TL } from '../../types/register-types'
import { ActionsType, TL as StoreTL } from '../../types/store-types'
import { CartItem } from '../../types/db-types'

export function sendItems(url: string, userId: String, cart: CartItem[]) {

    return async (dispatch: Dispatch<RegTypes | ActionsType>) => {

        if (userId) {
            dispatch({ type: TL.PLACE_ORDER, payload: false })

            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    userId: userId,
                    cart: cart
                })
            })
                .then(res => res.json())
                .then(orders => {
                    dispatch({ type: TL.ORDERS, payload: orders })
                    dispatch({ type: StoreTL.EMPTY_CART })
                })
                .catch(e => console.log(e))
        } else {
            dispatch({ type: TL.PLACE_ORDER, payload: true })
        }

    }
}