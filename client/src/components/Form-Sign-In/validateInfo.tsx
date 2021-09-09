interface ValuesTypes {
  username: string,
  email: string,
  phoneNumber: string,
  comment: string,
  password: string,
  password2: string
}
export interface ErrorsTypes {
  username?: string,
  email?: string,
  phoneNumber?: string,
  comment?: string,
  password?: string,
  password2?: string
}

export default function validateInfo(values: ValuesTypes) {
  let errors: ErrorsTypes = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number required';
  } else if (values.phoneNumber.length !== 12) {
    errors.phoneNumber = 'Phone number is invalid';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}
