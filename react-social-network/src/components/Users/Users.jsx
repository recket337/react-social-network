import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userImage from "../../assets/images/user.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(
          response.data.items
          /* [
        {
          id: 1,
          photoUrl:
            "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300",
          followed: false,
          fullName: "Sasha",
          status: "fe",
          location: { city: "Minsk", country: "Belarus" },
        },
        {
          id: 2,
          photoUrl:
            "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300",
          followed: true,
          fullName: "Dmitry",
          status: "fe",
          location: { city: "Moscow", country: "Russia" },
        },
        {
          id: 3,
          photoUrl:
            "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300",
          followed: false,
          fullName: "Anton",
          status: "fe",
          location: { city: "Kiev", country: "Ukraine" },
        },
        {
          id: 4,
          photoUrl:
            "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300",
          followed: false,
          fullName: "Andrew",
          status: "fe",
          location: { city: "Biala Podlaska", country: "Poland" },
        },
        ] */
        );
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userImage}
                  className={s.avatar}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
