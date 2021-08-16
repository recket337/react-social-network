import React from "react";
import { getUserProfileThunk } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { withRouter } from "react-router";
import s from "./Profile.module.css";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";

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

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  getUserProfileThunk,
})(withUrlDataContainerComponent);
