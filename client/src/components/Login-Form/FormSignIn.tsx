import validate from './validateInfo';
import useForm from './useForm';
import { useState } from 'react';
import './Form.scss';
import 'react-phone-number-input/style.css'

const FormSignIn = ({ submitForm, onSended, sended }: any) => {

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

  const { handleSubmit }: any = useForm(submitForm, validate);

  const sendLogin = async (email: string) => {
    await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.log(e))
      .finally(() => console.log('SendLogin was completed.'))
  }

  return (
    <div className='form-content-right' hidden={sended} >
      <form method='POST' action='/login' className='form' noValidate>
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
