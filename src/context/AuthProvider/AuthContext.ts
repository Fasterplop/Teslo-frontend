import { User } from "@/app/users/config";
import { ReturnValuesLogin } from "@/services/auth-service/interfaces";
import { createContext } from "react";

export interface AuthContextValues {
  user?: User;
  authenticated?: boolean;
  accessToken?: string;
  loading?: boolean;
  initAuthenticate?(data?: ReturnValuesLogin): Promise<void>;
  logOut?(): void;
}

const AuthContext = createContext<AuthContextValues>({});

export default AuthContext;
