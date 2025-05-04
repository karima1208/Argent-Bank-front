import axios from "axios";
import {
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess,
  updateUserFailed,
  updateUserRequest,
  updateUserSuccess,
} from "./userSlice";

export const loginUser = (body, dispatch) => {
  dispatch(loginUserRequest());
  axios
    .post("http://localhost:3001/api/v1/user/login", body)
    .then((res) => {
      const token = res.data.body.token;
      getProfile(token, dispatch);
    })
    .catch((err) => {
      const message = err.response.data.message;
      dispatch(loginUserFailed({ message }));
    });
};

export const getProfile = (token, dispatch) => {
  dispatch(loginUserRequest());
  axios
    .post("http://localhost:3001/api/v1/user/profile", null, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      const user = res.data.body;
      const payload = {
        user: user,
        token: token,
      };
      dispatch(loginUserSuccess(payload));
    })
    .catch((err) => {
      const message = err.response.data.message;
      dispatch(loginUserFailed({ message }));
    });
};

export const updateProfile = (token, body, onClose, dispatch) => {
  dispatch(updateUserRequest());
  axios
    .put("http://localhost:3001/api/v1/user/profile", body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      onClose();
      dispatch(updateUserSuccess());
      getProfile(token, dispatch);
    })
    .catch((err) => {
      console.log (err)
      const message = err.response.data.message;
      dispatch(updateUserFailed({ message }));
    });
};
