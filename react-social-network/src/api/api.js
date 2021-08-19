import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': '7308aedd-eed5-46ca-aef2-0ed352a10894',
  },
});

export const usersAPI = {
  getUsersGET(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  postUserFollow(id) {
    return instance.post(`follow/${id}`);
  },
  deleteUserUnfollow(id) {
    return instance.delete(`follow/${id}`);
  },
  getUserWithId(userId) {
    return profileAPI.getUserWithId(userId);
  },
};

export const profileAPI = {
  getUserWithId(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status: status,
    });
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

// axios
// .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)

// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//   withCredentials: true,
// });

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//   withCredentials: true,
//   headers: {
//     'API-KEY': '7308aedd-eed5-46ca-aef2-0ed352a10894',
//   },
// });

// axios.post(
//   `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//   {},
//   {
//     withCredentials: true,
//     'API-KEY': '7308aedd-eed5-46ca-aef2-0ed352a10894',
//   }
// );
