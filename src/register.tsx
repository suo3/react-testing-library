import PropTypes from "prop-types";
import * as React from "react";

const Register = (props) => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleRegister(values);
  };

  return (
    <main className='col-md-6 card'>
      <h3 className='align-self-center text-center'>Register here</h3>
      <form onSubmit={handleSubmit} className='align-self-center'>
        <div className='form-group'>
          <label htmlFor='email'>email</label>
          <input
            value={values.email}
            onChange={handleChange}
            type='email'
            className='form-control'
            id='email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password</label>
          <input
            value={values.password}
            onChange={handleChange}
            type='password'
            className='form-control'
            id='password'
          />
        </div>

        <button
          data-testid='submit'
          type='submit'
          className='btn mt-3 btn-primary'>
          Submit
        </button>
      </form>
    </main>
  );
};

export default Register;

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};
