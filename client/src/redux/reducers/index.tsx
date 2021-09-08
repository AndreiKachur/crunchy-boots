import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import mainReducer from './reducer-main'
import picsReducer from './reducer-pics'

export type State = ReturnType<typeof reducer>
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector

const reducer = combineReducers({
    load: mainReducer,
    pics: picsReducer
})


export default reducer