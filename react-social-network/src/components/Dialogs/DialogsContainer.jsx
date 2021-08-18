import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  sendMessageActionCreator,
  //updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import { Dialogs } from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewMessageBody: (body) => {
    //   dispatch(updateNewMessageBodyActionCreator(body));
    // },
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

// const AuthRedirectComponent = withAuthRedirect(Dialogs);

// export const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
