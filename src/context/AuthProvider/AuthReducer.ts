import { GET_USER, LOGIN_ERROR, LOGOUT_USER } from "../types";
import { AuthContextValues } from "./AuthContext";

interface ActionAuthReducer {
  type: string;
  payload?: any;
}

const authReducer = (
  state: AuthContextValues,
  action: ActionAuthReducer
): AuthContextValues => {
  switch (action.type) {
    case GET_USER:
      const user = { ...action.payload };
      delete user.token;
      return {
        ...state,
        user,
        authenticated: true,
        loading: false,
        accessToken: action.payload.token,
      };

    case LOGIN_ERROR:
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        authenticated: false,
        loading: false,
        accessToken: null,
      };

    default:
      return state;
  }
};

export default authReducer;
