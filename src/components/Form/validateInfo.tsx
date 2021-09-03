interface ValuesTypes {
  username: string,
  email: string,
  phoneNumber: string,
  comment: string
}
export interface ErrorsTypes {
  username?: string,
  email?: string,
  phoneNumber?: string,
  comment?: string
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
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}
