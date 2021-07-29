export default function validateInfo(values) {
  let errors = {};

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
