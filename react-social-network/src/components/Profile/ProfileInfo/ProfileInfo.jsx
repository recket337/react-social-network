import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div>
        <img src={props.profile.photos.large} />
      </div>
      <div className={s.description}>description</div>
    </div>
  );
};
