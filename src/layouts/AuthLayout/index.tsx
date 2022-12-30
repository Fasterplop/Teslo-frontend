import * as React from "react";
import AuthSide from "./AuthSide";
import SignInForm from "./SignInForm";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthProvider";

interface IAuthLayoutProps {}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = (props) => {
  const { authenticated } = useAuthContext();

  useEffect(() => {}, [authenticated]);
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <AuthSide>
        <div className="mb-8">
          <h3 className="mb-1">Welcome back!</h3>
          <p>Please enter your credentials to sign in!</p>
        </div>

        <SignInForm />
      </AuthSide>
    </div>
  );
};

export default AuthLayout;
