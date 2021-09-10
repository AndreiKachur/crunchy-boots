import { useState, useEffect } from 'react';

const useForm = (callback: any, validate: any) => {
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

        fetch('/profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify({ user })
        })
        // callback();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

  return { handleChange, handleNumberChange, handleSubmit, values, errors };
};

export default useForm;
