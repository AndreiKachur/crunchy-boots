import { TL } from '../../types/register-types'

const loginRequested = () => ({ type: TL.LOGIN_REQUESTED })

const firstTime = (firstTime: boolean) => ({ type: TL.FIRST_TIME, payload: firstTime })

const getUserId = (userId: string) => ({ type: TL.USER_ID, payload: userId })

const getOrders = (orders: any) => ({ type: TL.ORDERS, payload: orders })

const setOrder = (place = true) => ({ type: TL.PLACE_ORDER, payload: place })

export {
    loginRequested,
    firstTime,
    getUserId,
    getOrders,
    setOrder
}