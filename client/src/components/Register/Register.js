import { useState } from 'react'
import Form from '../Form-Sign-In/Form.tsx'
import './Register.scss';

function Register() {
    const [signUp, setSignUp] = useState(true)
    const [firstChoiсe, setFirstChoiсe] = useState(true)

    const makeChoice = (choice = true) => {
        setFirstChoiсe(false)
        if (!choice) setSignUp(choice)
    }

    if (firstChoiсe) {
        return (
            <div className='register__wrapper'>
                < div className='register register__first-choise' >
                    <h1 className='register'>
                        Are you first time here?
                    </h1>
                    <button className='register__btn' onClick={makeChoice}>
                        Sign Up
                    </button>
                </div >
                < div className='register register__first-choise' >
                    <h1 className='register'>
                        Do you already have an account?
                    </h1>
                    <button className='register__btn' onClick={() => makeChoice(false)}>
                        Sign In
                    </button>
                </div>
            </div>
        )
    }
    const question = signUp ? 'Do you already have an account?'
        : 'Are you first time here?'
    const buttonText = signUp ? 'Sign In' : 'Sign Up'
    return (
        <div className='register'>
            <Form signUp={signUp} />
            <div className='register__container'>
                <h1 className='register'>
                    {question}
                </h1>
                <button className='register__btn' onClick={() => { setSignUp(!signUp) }}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default Register
