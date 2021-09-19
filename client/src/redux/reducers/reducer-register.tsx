import { ActionsType, RegisterType, TL } from '../../types/register-types'

const initialState: RegisterType = {
    userId: '',
    newbie: undefined,
    loading: false,
    orders: [],
    placeOrder: false,
    user: undefined
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
            userId: actions.payload,
            loading: false
        }
        case TL.ORDERS: return {
            ...state,
            orders: actions.payload
        }
        case TL.USER: return {
            ...state,
            user: actions.payload,
            loading: false
        }
        case TL.PLACE_ORDER: return {
            ...state,
            placeOrder: actions.payload
        }

        default: return state
    }
}

export default regReducer