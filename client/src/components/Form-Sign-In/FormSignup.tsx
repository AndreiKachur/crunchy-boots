import validate from './validateInfo';
import PhoneInput from 'react-phone-number-input/input'
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
      {/* <form action="/profile" method="POST" onSubmit={handleSubmit} className='form' noValidate> */}
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Please fill out the registration form.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your name'
            value={values.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone number</label>
          <PhoneInput
            name='phoneNumber'
            className='form-input'
            placeholder="+7  XXX  XXX  XX  XX"
            defaultCountry="RU"
            value={values.phoneNumber}
            onChange={handleNumberChange}
            maxLength={17}
            required />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
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
        <button className='form-input-btn' type='submit'>
          Place order
        </button>
        <span className='form-input-login'>
          Don't want fill out the form? <br /> Сall us: 8-800-555-55-55
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
