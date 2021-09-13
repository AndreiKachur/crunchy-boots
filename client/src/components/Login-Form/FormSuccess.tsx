import './Form.scss';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../redux/reducers'
import { Redirect } from 'react-router-dom'

const FormSuccess = ({ signIn }: any) => {
  const [redirect, setRedirect] = useState(false);
  const { placeOrder } = useTypedSelector(s => s.register)

  useEffect(() => {
    const timerId = setTimeout(() => setRedirect(true), 2000)
    return () => clearTimeout(timerId)
  }, [])

  if (redirect) {
    if (placeOrder) {
      return <Redirect to='/cart' />
    } else {
      return <Redirect to='/profile' />
    }
  }
  return (
    <div className={signIn ? 'form-content-success form-content-success_dark'
      : 'form-content-success'}>
      <h2 className='form-success'>
        Completed successfully.{placeOrder && ' Now you can place your order.'}
      </h2>
      { signIn ?
        <img className='form-img-2' src='img/img-3.svg' alt='success' />
        : <img className='form-img-2' src='img/img-4.svg' alt='success' />}
    </div>
  );
};

export default FormSuccess;
