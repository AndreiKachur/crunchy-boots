import validate from './validateInfo';
import useForm from './useForm';
import './Form.scss';
import 'react-phone-number-input/style.css'

const FormSignup = ({ submitForm }: any) => {

  const { handleChange, handleSubmit, handleNumberChange, values, errors }: any = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form action="/profile" method="POST" className='form' />
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Please put your login data.
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
          {errors.email && <p>{errors.email}</p>}
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
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign In
        </button>

      </form>
    </div>
  );
};

export default FormSignup;
