import React from "react";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";

const SignUp = ({ values, handleSubmit, handleChange, errors }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      onChange={handleChange}
      value={values.email}
      placeholder="Email"
    />
    <p>{errors.email && errors.email}</p>
    <input
      type="password"
      name="password"
      onChange={handleChange}
      value={values.password}
      placeholder="Password"
    />
    <p>{errors.password && errors.password}</p>
    <input
      type="password"
      name="repeatpassword"
      onChange={handleChange}
      value={values.repeatpassword}
      placeholder="Repeat password"
    />
    <p>{errors.repeatpassword && errors.repeatpassword}</p>
    <input type="submit" value="Sign Up" />
    <Link to="/signin">sign in</Link>
  </form>
);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(5)
    .max(15)
    .required(),
  repeatpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Repeat password is required")
});

const formikConfig = {
  validateOnChange: false,
  validationSchema,
  mapPropsToValues: () => ({ email: "", password: "", repeatpassword: "" }),
  handleSubmit: (values, { resetForm, setSubmitting }) => {
    setSubmitting(false);
    const { email, password } = values;
    fetch("http://192.168.1.67:3001/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(data => {
        console.log(data);
        resetForm();
      })
      .catch(error => console.error("Error:", error));
  }
};

export default withFormik(formikConfig)(SignUp);
