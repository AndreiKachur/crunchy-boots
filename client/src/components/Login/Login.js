import { useTypedSelector } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { firstTime } from '../../redux/actions/actions-reg'
import Form from '../Login-Form/Form.tsx'
import './Login.scss';

function Login() {

    const { newbie } = useTypedSelector(s => s.register)
    const dispatch = useDispatch()

    if (newbie === undefined) {
        return (
            <div className='register__wrapper'>
                < div className='register register__first-choise' >
                    <h1 className='register register__question'>
                        Are you first time here?
                    </h1>
                    <button className='register__btn' onClick={() => dispatch(firstTime(true))}>
                        Sign Up
                    </button>
                </div >
                < div className='register register__first-choise' >
                    <h1 className='register register__question'>
                        Do you already have an account?
                    </h1>
                    <button className='register__btn' onClick={() => dispatch(firstTime(false))}>
                        Sign In
                    </button>
                </div>
            </div>
        )
    }
    const question = newbie ? 'Do you already have an account?'
        : 'Are you first time here?'
    const buttonText = newbie ? 'Sign In' : 'Sign Up'
    return (
        <div className='register'>
            <Form newbie={newbie} />
            <div className='register__container'>
                <h1 className='register register__question'>
                    {question}
                </h1>
                <button className='register__btn' onClick={() => dispatch(firstTime(!newbie))}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default Login
