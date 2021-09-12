import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getUserId } from '../../redux/actions/actions-reg';

const useForm = (callback: any, validate: any) => {

  const dispatch = useDispatch()

  const [values, setValues] = useState({
    username: '',
    email: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNumberChange = (number: string) => {
    setValues({
      ...values,
      phoneNumber: number
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const sendForm = async (user: any) => {
    await fetch('/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => dispatch(getUserId(data)))
      .catch(e => {
        console.log(e)
        dispatch(getUserId(''))
      })
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        const pass = Math.random().toString().slice(2, 6)
        const user = {
          username: values.username,
          email: values.email,
          phoneNumber: values.phoneNumber,
          password: pass
        }

        sendForm(user)

        // callback();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

  return { handleChange, handleNumberChange, handleSubmit, values, errors };
};

export default useForm;
