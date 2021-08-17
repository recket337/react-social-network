import React from "react";
import {
  getUserProfileThunk,
  updateStatus,
  getStatus,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { withRouter } from "react-router";
import s from "./Profile.module.css";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 18983;
    this.props.getUserProfileThunk(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunk,
    updateStatus,
    getStatus,
  }),
  withRouter
  //  withAuthRedirect,
)(ProfileContainer);
