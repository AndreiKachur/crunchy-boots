import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import loadReducer from './reducer-main'
import picsReducer from './reducer-pics'

type State = ReturnType<typeof reducer>
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector

const reducer = combineReducers({
    load: loadReducer,
    pics: picsReducer
})


export default reducer