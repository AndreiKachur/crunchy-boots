import { useEffect, useState } from 'react'
import { useTypedSelector } from '../../redux/reducers'
import Order from '../Order'
import './Profile.scss'

function Profile() {
    const [state, setState] = useState({})
    const [orders, setOrders] = useState([])
    const { userId } = useTypedSelector(s => s.register)

    useEffect(() => {
        if (userId) {
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
                .then((res) => setOrders(res))
        }
    }, [userId])
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
                    <h1>Hello, {username}.</h1>
                    <h3>This is your profile enter data:</h3> <hr />
                    <h4>login: </h4>
                    <h3>{email}</h3> <hr />
                    <h4>password:</h4>
                    <h3> {password}</h3> <hr />
                </div>
                {orders.length && (
                    orders
                        .sort((a, b) => b.orderNumber - a.orderNumber)
                        .map((item, i) => {
                            return (<>
                                <h3 className='cart-wrapper profile'>{putOrderData(i)}<hr /></h3>
                                <Order cart={item.cart} key={item.date} />
                            </>
                            )
                        })
                )}
            </>
        )
    } else {
        return (
            <div style={{ margin: '5rem' }}>
                <h1>Incorrect login data.</h1>
            </div>
        )
    }
}

export default Profile
