import { useEffect, useState } from 'react'

function Profile() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Could not fetch boots,
                            status ${res.status}`)
                }
                return res.json()
            })
            .then((res) => setState(res))
    }, [])
    if (state.length > 0) {
        const { cart, username, phoneNumber } = state[0]
        const { title, price, amount } = cart.items[0]

        return (
            <div style={{ margin: '5rem' }}>
                <h1>{username}, your order was placed.</h1>
                <p>We will connect with you by {phoneNumber}.</p>
                <h1>Your order is:</h1>
                <ul>
                    <li>title: {title}</li>
                    <li>price: {price}</li>
                    <li>amount: {amount}</li>
                    <li><h3>total: {price * amount}</h3></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div style={{ margin: '5rem' }}>
                <h1>Empty profile.</h1>
            </div>
        )
    }
}

export default Profile
