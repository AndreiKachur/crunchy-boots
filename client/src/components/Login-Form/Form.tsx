import { useState } from 'react'
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.scss';

interface PropTypes {
  closeForm: (e: any) => void,
  newbie: Boolean
}

const Form = ({ closeForm, newbie }: PropTypes) => {

  const [sended, setSended] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div className='form-container'>

        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>

        {sended && isSubmitted && <FormSuccess />}

        {newbie ?
          <FormSignUp
            sended={sended}
            onSended={() => setSended(true)}
            submitForm={() => setIsSubmitted(true)}
            isSubmitted={isSubmitted}
          />
          :
          <FormSignIn
            sended={sended}
            onSended={() => setSended(true)}
            submitForm={() => setIsSubmitted(true)}
            isSubmitted={isSubmitted}
          />
        }

      </div>
    </>
  );
};

export default Form
