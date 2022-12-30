import { ReturnValuesLogin } from "@/services/auth-service/interfaces";
import * as React from "react";
import { GET_USER, LOGOUT_USER } from "../types";
import AuthContext, { AuthContextValues } from "./AuthContext";
import authReducer from "./AuthReducer";

interface IAuthProviderProps {
  children?: React.ReactNode;
}

const initialValues: AuthContextValues = {
  loading: true,
  user: {},
  accessToken: localStorage.getItem("at"),
  authenticated: false,
};
const AuthProvider: React.FunctionComponent<IAuthProviderProps> = (props) => {
  const [state, dispatch] = React.useReducer(authReducer, initialValues);
  const initAuthenticate = async (data?: ReturnValuesLogin) => {
    if (data) {
      localStorage.setItem("at", data.token);
      dispatch({ type: GET_USER, payload: data });
    } else {
      //TODO: Verify storage authenticated
    }
  };
  const logOut = () => {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("at");
  };

  console.log(state);
  return (
    <AuthContext.Provider value={{ ...state, initAuthenticate, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => React.useContext(AuthContext);
