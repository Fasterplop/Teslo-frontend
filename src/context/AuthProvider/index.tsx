import { hideLoader, showLoader } from "@/components/ui/Loader";
import { ReturnValuesLogin } from "@/services/auth-service/interfaces";
import * as React from "react";
import { GET_USER, LOGIN_ERROR, LOGOUT_USER } from "../types";
import AuthContext, { AuthContextValues } from "./AuthContext";
import authReducer from "./AuthReducer";
import { authService } from "@/services/auth-service";
import tokenAuth from "@/config/token";

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
      tokenAuth(data.token);
      dispatch({ type: GET_USER, payload: data });
    } else {
      try {
        const req = await authService.refresh();
        tokenAuth(req.data.token);
        localStorage.setItem("at", req.data.token);
        dispatch({ type: GET_USER, payload: req.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_ERROR });
      } finally {
        hideLoader();
      }
    }
  };

  const logOut = React.useCallback(() => {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("at");
  }, []);

  React.useEffect(() => {
    initAuthenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, initAuthenticate, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => React.useContext(AuthContext);
