import { useState } from 'react';
import { connect } from 'react-redux'
import { placeOrder } from '../../redux/actions/actions';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.scss';

const Form = ({ showForm, placeOrder, ordered }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    placeOrder()
  }

  return (
    <>
      <div className='form-container'>
        {ordered ? null : <span className='close-btn' onClick={showForm}>×</span>}
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {ordered || isSubmitted ? (
          <FormSuccess />
        ) : (
          <FormSignup submitForm={submitForm} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({ ordered: state.ordered })

export default connect(mapStateToProps, { placeOrder: placeOrder })(Form)
