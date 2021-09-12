import { ActionsType, RegisterType, TL } from '../../types/register-types'

const initialState: RegisterType = {
    userId: '',
    newbie: undefined,
    loading: false
}

const regReducer = (state = initialState, actions: ActionsType): RegisterType => {

    switch (actions.type) {
        case TL.LOGIN_REQUESTED: return {
            ...state,
            loading: true,
        }
        case TL.FIRST_TIME: return {
            ...state,
            newbie: actions.payload
        }
        case TL.USER_ID: return {
            ...state,
            userId: actions.payload
        }

        default: return state
    }
}

export default regReducer