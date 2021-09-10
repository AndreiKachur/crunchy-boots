import validate from './validateInfo';
import useForm from './useForm';
import './Form.scss';
import 'react-phone-number-input/style.css'

const FormSignup = ({ submitForm, onSended, sended }: any) => {

  const { handleSubmit }: any = useForm(submitForm, validate);

  return (
    <div className='form-content-right' hidden={sended}>
      <form method='POST' onSubmit={handleSubmit} className='form' noValidate>
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

export default FormSignup;
