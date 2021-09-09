import { useDispatch } from 'react-redux'
import { placeOrder } from '../../redux/actions/actions';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { State as ReducerStateTypes } from '../../redux/reducers'
import { useTypedSelector } from '../../redux/reducers'
import './Form.scss';

interface PropTypes {
  closeForm: (e: any) => void
}

const Form = ({ closeForm }: PropTypes) => {

  const { ordered } = useTypedSelector((s: ReducerStateTypes) => s.load)
  const dispatch = useDispatch()

  return (
    <>
      <div className='form-container'>

        {ordered ||
          <span className='close-btn'
            onClick={closeForm}>×</span>}

        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>

        {ordered ? (
          <FormSuccess />
        ) : (
          <FormSignup submitForm={() => dispatch(placeOrder())} />
        )}
      </div>
    </>
  );
};

export default Form
