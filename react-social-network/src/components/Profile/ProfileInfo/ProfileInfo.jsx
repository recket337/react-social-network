import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus.jsx";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src={props.profile.photos.large} />
      </div>
      <div className={s.description}>description</div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};
