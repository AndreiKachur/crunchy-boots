import { useEffect, useState } from 'react'
import { useTypedSelector } from '../../redux/reducers'

function Profile() {
    const [state, setState] = useState({})
    const { userId } = useTypedSelector(s => s.register)

    useEffect(() => {
        if (userId !== '') {
            fetch(`/users?_id=${userId}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Could not fetch user,
                            status ${res.status}`)
                    }
                    return res.json()
                })
                .then((res) => setState(...res))
        }
    }, [userId])

    if (state.email) {
        const { username, email, password } = state

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
                <h1>Incorrect login data.</h1>
            </div>
        )
    }
}

export default Profile
