import { FirstTimeActionType, RegisterType } from '../../types/store-types'

const initialState: RegisterType = {
    newbie: undefined,
}

const regReducer = (state = initialState, actions: FirstTimeActionType): RegisterType => {

    switch (actions.type) {
        case 'FIRST_TIME': return { newbie: actions.payload }

        default: return state
    }
}

export default regReducer