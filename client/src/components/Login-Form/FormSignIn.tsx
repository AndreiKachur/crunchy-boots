import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getUserId } from '../../redux/actions/actions-reg';
import 'react-phone-number-input/style.css'
import './Form.scss';

const FormSignIn = ({ onSended, sended, submitForm, isSubmitted, isSignIn }: any) => {

  const dispatch = useDispatch()

  const [incorrect, setIncorrect] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const sendLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(values)
    })
      .then(res => {
        if (!res.ok) {
          setIncorrect(true)
          throw new Error(`Could not fetch user, status ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        submitForm()
        isSignIn()
        return dispatch(getUserId(data))
      })
      .catch(e => {
        console.log(e)
        dispatch(getUserId(''))
      })
  }

  return (
    <div className='form-content-right' hidden={sended && isSubmitted} >
      <form onSubmit={sendLogin} className='form' noValidate>
        <h1>
          Please enter your login data.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            required
          />
          {incorrect && <p>Incorrect email or password.</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            required
          />
          {incorrect && <p>Incorrect email or password.</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={onSended}>
          Sign In
        </button>

      </form>
    </div>
  );
};

export default FormSignIn;
