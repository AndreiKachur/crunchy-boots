import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/reducers'
import { fetchItems } from '../../redux/actions/actions-fetch'
import Order from '../Order'
import Spinner from '../Spinner'
import './Profile.scss'

function Profile() {

    const [waiting, setWaiting] = useState(true)
    const [showPass, setShowPass] = useState(false)
    const { userId, orders, loading, user } = useTypedSelector(s => s.register)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(fetchItems(`/user?_id=${userId}`))
            dispatch(fetchItems(`/orders?userId=${userId}`))
        }
    }, [userId, dispatch])

    useEffect(() => {
        const timerId = setTimeout(() => setWaiting(false), 800)
        return () => clearTimeout(timerId)
    }, [])

    if (loading) return <Spinner />

    if (user) {
        const { username, email, password } = user
        let pass = showPass ? password : '****'
        let btnText = showPass ? 'HIDE ME' : 'SHOW ME'

        const putOrderData = (i) => {
            const { orderNumber, date } = orders[i]
            const orderNum = orderNumber > 10 ? `00${orderNumber}` : `000${orderNumber}`
            const d = new Date(+date)

            const month = d.getMonth() + 1
            const day = d.getDate()

            const formatDate = datePart => datePart < 10 ? `0${datePart}` : datePart

            return `Order №${orderNum} from ${formatDate(day)}-${formatDate(month)}-${d.getFullYear()}`
        }

        return (
            <>
                <div className='cart-wrapper profile'>
                    <h1>Hello, {username}.</h1><hr />
                    <h4>login: </h4>
                    <h3>{email}</h3> <hr />
                    <h4>password:</h4>
                    <h3>
                        {pass}
                        <button className='profile__pass-btn'
                            onClick={() => setShowPass(!showPass)}>
                            {btnText}
                        </button>
                    </h3>
                    <hr />
                </div>
                {orders.length > 0 ? (
                    orders
                        .sort((a, b) => b.orderNumber - a.orderNumber)
                        .map((item, i) => {
                            return (<div key={item.date}>
                                <h3 className='profile_padding profile_margin'>{putOrderData(i)}</h3>
                                <hr className='profile_margin' />
                                <Order cart={item.cart} />
                            </div>
                            )
                        })
                ) : null}
            </>
        )
    } else {
        return (
            <div className='profile__incorrect'>
                <h1>{!waiting && 'Incorrect login data.'}</h1>
            </div>
        )
    }
}

export default Profile
