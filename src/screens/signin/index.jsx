import React from "react";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Input from "../../components/input";
import Button from "../../components/button";

const StyledContainer = styled.div`
  width: 30%;
  height: 70%;
  padding: 50px;
  margin: 0 auto;
  background-color: #3d3d3d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.p`
  color: white;
`;

const StyledLink = styled(Link)`
  color: #448e9d;
`;

const SignIn = ({ values, handleChange, handleSubmit, errors }) => (
  <StyledContainer>
    <StyledTitle>Sign In To-Do</StyledTitle>
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        text="Email"
        onChange={handleChange}
        value={values.email}
        error={errors.email && errors.email}
      />
      <Input
        type="password"
        name="password"
        text="Password"
        onChange={handleChange}
        value={values.password}
        error={errors.password && errors.password}
      />
      <Button type="submit" text="Sign Up" margin="10px 0" padding="10px 0"  />
    </StyledForm>
    <StyledLink to="/signup">sign up</StyledLink>
  </StyledContainer>
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
