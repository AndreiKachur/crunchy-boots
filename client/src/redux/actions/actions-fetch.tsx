import { Dispatch } from 'redux'
import { DbItem } from '../../types/db-types'
import { TL, ActionsType } from '../../types/store-types'

export function fetchBoots(url: string) {
    return (dispatch: Dispatch<ActionsType>) => {

        dispatch({ type: TL.BOOTS_REQUESTED });

        fetch(url)
            .then(res => {
                console.log('boots was fetch to actions-fetch')
                if (!res.ok) {
                    throw new Error(`Could not fetch boots,
                                status ${res.status}`)
                }
                return res.json()
            })
            .then((boots: DbItem[]) => dispatch({
                type: TL.BOOTS_LOADED,
                payload: boots.sort((a, b) => a.id - b.id)
            }))
    }
}