import { useEffect, useState } from 'react'

function Profile() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Could not fetch user,
                            status ${res.status}`)
                }
                return res.json()
            })
            .then((res) => setState(res))
    }, [])
    if (state.length > 0) {
        const { username, email, password } = state[0]

        return (
            <div style={{ margin: '5rem' }}>
                <h1>Hello, {username}.</h1>
                <br></br>
                <h3>This is your profile enter data:</h3> <br /> <hr /> <br />
                <h4>login: </h4>
                <h3>{email}</h3><br /> <hr /><br />
                <h4>password:</h4>
                <h3> {password}</h3> <br /> <hr />
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
