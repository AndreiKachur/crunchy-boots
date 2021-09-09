import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../redux/reducers'

const useForm = (callback: any, validate: any) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    comment: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cart } = useTypedSelector(s => s.load)

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

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {

        const user = {
          username: values.username,
          email: values.email,
          phoneNumber: values.phoneNumber
        }
        fetch('/profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify({ user, cart })
        })
        callback();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

  return { handleChange, handleNumberChange, handleSubmit, values, errors };
};

export default useForm;
