import { ReturnValuesLogin } from "@/services/auth-service/interfaces";
import { GET_USER, LOGIN_ERROR, LOGOUT_USER } from "../types";
import { AuthContextValues } from "./AuthContext";

interface ActionAuthReducer {
  type: string;
  payload?: ReturnValuesLogin;
}

const authReducer = (
  state: AuthContextValues,
  action: ActionAuthReducer
): AuthContextValues => {
  switch (action.type) {
    case GET_USER:
      const { user, token: accessToken } = action.payload;
      return {
        ...state,
        user,
        authenticated: true,
        loading: false,
        accessToken,
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
