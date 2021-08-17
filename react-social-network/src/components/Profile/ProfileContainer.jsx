import React from "react";
import { getUserProfileThunk } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { withRouter } from "react-router";
import s from "./Profile.module.css";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    //debugger;
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 2;
    this.props.getUserProfileThunk(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunk,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
