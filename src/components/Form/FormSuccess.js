import React from 'react';
import './Form.scss';

const FormSuccess = () => {
  return (
    <div className='form-content-success'>
      <h2 className='form-success'>We have already started working on your order. Our manager will contact you soon.</h2>
      <img className='form-img-2' src='img/img-4.svg' alt='success' />
    </div>
  );
};

export default FormSuccess;
