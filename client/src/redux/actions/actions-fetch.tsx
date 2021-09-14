import { Dispatch } from 'redux'
import { DbItem } from '../../types/db-types'
import { TL, ActionsType } from '../../types/store-types'

export function fetchBoots(url: string) {
    return (dispatch: Dispatch<ActionsType>) => {

        dispatch({ type: TL.BOOTS_REQUESTED });

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Could not fetch boots,
                                status ${res.status}`)
                }
                return res.json()
            })
            .then((boots: DbItem[]) => dispatch({
                type: TL.BOOTS_LOADED,
                payload: boots
            }))
    }
}