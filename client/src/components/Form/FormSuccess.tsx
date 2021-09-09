import './Form.scss';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

const FormSuccess = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => setRedirect(true), 2000)
    return () => clearTimeout(timerId)
  }, [])

  if (redirect) return <Redirect to='/profile' />
  return (
    <div className='form-content-success'>
      <h2 className='form-success'>
        We have already started working on your order. Our manager will contact you soon.
      </h2>
      <img className='form-img-2' src='img/img-4.svg' alt='success' />
    </div>
  );
};

export default FormSuccess;
