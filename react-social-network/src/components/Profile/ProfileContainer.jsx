import React from "react";
import { setUserProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import * as axios from "axios";
import { withRouter } from "react-router";
import s from "./Profile.module.css";
import { usersAPI } from "../../api/api";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    //debugger;
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 2;
    usersAPI.getUserWithId(userId).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    console.log(this.props);
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(withUrlDataContainerComponent);
