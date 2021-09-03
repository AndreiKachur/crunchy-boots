import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { placeOrder } from '../../redux/actions/actions';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { State as ReducerStateTypes } from '../../redux/reducers'
import { useTypedSelector } from '../../redux/reducers'
import './Form.scss';

interface PropTypes {
  showForm: (e: any) => void
}

const Form = ({ showForm }: PropTypes) => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ordered } = useTypedSelector((s: ReducerStateTypes) => s.load)
  const dispatch = useDispatch()
  console.log(ordered);


  function submitForm() {
    setIsSubmitted(true);
    dispatch(placeOrder())
  }

  return (
    <>
      <div className='form-container'>

        {ordered ? null
          : <span className='close-btn'
            onClick={showForm}>×</span>}

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

export default Form
