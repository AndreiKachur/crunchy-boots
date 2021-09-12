import { TL } from '../../types/register-types'

const loginRequested = () => ({ type: TL.LOGIN_REQUESTED })

const firstTime = (firstTime: boolean) => ({ type: TL.FIRST_TIME, payload: firstTime })

const getUserId = (userId: string) => ({ type: TL.USER_ID, payload: userId })

export {
    loginRequested,
    firstTime,
    getUserId
}