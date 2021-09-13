import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/reducers'
import { getOrders, loginRequested } from '../../redux/actions/actions-reg'
import Order from '../Order'
import Spinner from '../Spinner'
import './Profile.scss'

function Profile() {
    const [state, setState] = useState({})
    const [waiting, setWaiting] = useState(true)
    const { userId, orders, loading } = useTypedSelector(s => s.register)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(loginRequested())

            fetch(`/user?_id=${userId}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Could not fetch user,
                            status ${res.status}`)
                    }
                    return res.json()
                })
                .then((res) => setState(...res))

            fetch(`/orders?userId=${userId}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Could not fetch user,
                            status ${res.status}`)
                    }
                    return res.json()
                })
                .then((res) => dispatch(getOrders(res)))
        }
    }, [userId, dispatch])

    useEffect(() => {
        const timerId = setTimeout(() => setWaiting(false), 800)
        return () => clearTimeout(timerId)
    }, [])

    if (loading) return <Spinner />

    if (state.email) {
        const { username, email, password } = state

        const putOrderData = (i) => {
            const { orderNumber, date } = orders[i]
            const orderNum = orderNumber > 10 ? `00${orderNumber}` : `000${orderNumber}`
            const d = new Date(+date)
            let month = (d.getMonth() + 1)
            month = month < 10 ? `0${month}` : month
            return `Order №${orderNum} from ${d.getDate()}-${month}-${d.getFullYear()}`
        }

        return (
            <>
                <div className='cart-wrapper profile'>
                    <h1>Hello, {username}.</h1><hr />
                    <h4>login: </h4>
                    <h3>{email}</h3> <hr />
                    <h4>password:</h4>
                    <h3> {password}</h3> <hr />
                </div>
                {orders.length > 0 ? (
                    orders
                        .sort((a, b) => b.orderNumber - a.orderNumber)
                        .map((item, i) => {
                            return (<div key={item.date}>
                                <h3 className='cart-wrapper profile'>{putOrderData(i)}<hr /></h3>
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
