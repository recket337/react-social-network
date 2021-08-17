import React from "react";
// import { Preloader } from "../../common/Preloader/Preloader";
// import s from "./ProfileInfo.module.css";

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status}></input>
          </div>
        ) : (
          <div>
            <span onClick={ this.activateEditMode }>{this.props.status}</span>
          </div>
        )}
      </>
    );
  }
}
