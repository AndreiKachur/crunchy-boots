import { Dispatch } from 'redux'
import { DbItem } from '../../types/db-types'
import { TL, ActionsType } from '../../types/store-types'
import { ActionsType as RegTypes, TL as RegTL } from '../../types/register-types'

export function fetchItems(url: string) {

    return (dispatch: Dispatch<ActionsType | RegTypes>) => {

        if (url === '/boots') dispatch({ type: TL.BOOTS_REQUESTED });
        if (url.includes(`/orders?userId`)) dispatch({ type: RegTL.LOGIN_REQUESTED });

        const get = fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Could not fetch boots,
                                status ${res.status}`)
                }
                return res.json()
            })

        if (url === '/boots') {
            get.then((boots: DbItem[]) => dispatch({
                type: TL.BOOTS_LOADED,
                payload: boots.sort((a, b) => a.id - b.id)
            }))
        } else if (url.includes(`/orders?userId`)) {
            get.then((orders) => dispatch(({
                type: RegTL.ORDERS, payload: orders
            })))
        } else if (url.includes(`/user?_id`)) {
            get.then((user) => dispatch(({
                type: RegTL.USER, payload: user[0]
            })))
        }


    }
}