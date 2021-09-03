import { useState, useEffect } from 'react';

const useForm = (callback: any, validate: any) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    comment: ''
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
        callback();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

  return { handleChange, handleNumberChange, handleSubmit, values, errors };
};

export default useForm;
