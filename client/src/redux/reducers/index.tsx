import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import mainReducer from './reducer-main'
import picsReducer from './reducer-pics'
import regReducer from './reducer-register'

export type State = ReturnType<typeof reducer>
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector

const reducer = combineReducers({
    load: mainReducer,
    pics: picsReducer,
    register: regReducer
})


export default reducer