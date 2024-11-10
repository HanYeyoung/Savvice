type UserInfomation = {
    email: string;
    password: string;
  };
  
  function validateLogin(values: UserInfomation) {
    const errors = {
      email: '',
      password: '',
    };
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Incorrect form of email.';
    }
    if (!(values.password.length >= 8 && values.password.length <= 20)) {
      errors.password = 'Password should be between 8~20 letters.';
    }
  
    return errors;
  }
  
  export {validateLogin};