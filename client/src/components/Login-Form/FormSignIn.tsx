import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getUserId } from '../../redux/actions/actions-reg';
import 'react-phone-number-input/style.css'
import './Form.scss';

const FormSignIn = ({ onSended, sended }: any) => {

  const dispatch = useDispatch()

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
      .then(res => res.json())
      .then(data => dispatch(getUserId(data)))
      .catch(e => {
        console.log(e)
        dispatch(getUserId(''))
      })
  }

  return (
    <div className='form-content-right' hidden={sended} >
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
        </div>
        <button className='form-input-btn' type='submit' onClick={onSended}>
          Sign In
        </button>

      </form>
    </div>
  );
};

export default FormSignIn;
