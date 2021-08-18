import React from "react";
import { Field, reduxForm } from "redux-form";

export const LoginForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component={"input"} name="login" placeholder={"login"} />
      </div>
      <div>
        <Field component={"input"} name="password" placeholder={"password"} />
      </div>
      <div>
        <Field component={"input"} name="rememberMe" type={"checkbox"} /> remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({
  form: "login",
})(LoginForm);

export const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return <div>
    <h1>Login</h1>
    <ReduxLoginForm onSubmit={onSubmit} />
  </div>
}
