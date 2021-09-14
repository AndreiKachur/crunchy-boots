import { Dispatch } from 'redux'
import { DbItem } from '../../types/db-types'
import { TL, ActionsType } from '../../types/store-types'

export function fetchBoots(url: string) {
    return (dispatch: Dispatch<ActionsType>) => {

        dispatch({ type: TL.BOOTS_REQUESTED });

        fetch(url)
            .then(res => {
                console.log('boots was fetched to actions-fetch')
                if (!res.ok) {
                    throw new Error(`Could not fetch boots,
                                status ${res.status}`)
                }
                return res.text()
            })
            .then(r => console.log(r))
    }
}