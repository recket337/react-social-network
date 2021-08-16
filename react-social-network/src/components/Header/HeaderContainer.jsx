import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import s from "./Header.module.css";
import { setUserProfileThunk } from "../../redux/authReducer";

export class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfileThunk()
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setUserProfileThunk
})(HeaderContainer);
