import { PicsType, BrowsePicsActionType } from '../../types/store-types'

const initialState: PicsType = {
    picsSlider: false,
    picId: 0
}

const picsReducer = (state = initialState, actions: BrowsePicsActionType): PicsType => {

    switch (actions.type) {
        case 'BROWSE_PICS':
            return {
                picsSlider: !state.picsSlider,
                picId: actions.id,
            }
        default: return state
    }
}

export default picsReducer