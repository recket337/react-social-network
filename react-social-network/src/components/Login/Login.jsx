import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../common/FormControls/FormControls";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name="email"
          validate={[required]}
          placeholder={"Email"}
        />
      </div>
      <div>
        <Field
          component={Input}
          name="password"
          validate={[required]}
          placeholder={"Password"}
          type={"password"}
        />
      </div>
      <div>
        <Field component={Input} name="rememberMe" type={"checkbox"} /> remember
        me
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  login,
})(Login);
