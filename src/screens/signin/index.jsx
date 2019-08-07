import React from "react";
import { Link } from 'react-router-dom';
import { withFormik } from "formik";
import * as Yup from "yup";

const SignIn = ({ values, handleChange, handleSubmit, errors }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      onChange={handleChange}
      name="email"
      value={values.email}
      placeholder="Email"
    />
    <p>{errors.email && errors.email}</p>
    <input
      type="password"
      onChange={handleChange}
      name="password"
      value={values.password}
      placeholder="Password"
    />
    <p>{errors.password && errors.password}</p>
    <input type="submit" value="Sign Up" />
    <Link to="/signup">sign up</Link>
  </form>
);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(5)
    .max(15)
    .required()
});

const formikConfig = {
  validateOnChange: false,
  validationSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: (values, { setSubmitting }) => {
    setSubmitting(false);
    const { email, password } = values;

    fetch("http://192.168.1.67:3001/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
  }
};

export default withFormik(formikConfig)(SignIn);
