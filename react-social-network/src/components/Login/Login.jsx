import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../common/FormControls/FormControls";

export const LoginForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component={Input} name="login" validate={[required]} placeholder={"login"} />
      </div>
      <div>
        <Field component={Input} name="password" validate={[required]} placeholder={"password"} />
      </div>
      <div>
        <Field component={Input} name="rememberMe" type={"checkbox"} /> remember me
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
