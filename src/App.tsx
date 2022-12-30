import * as React from "react";
import AuthLayout from "./layouts/AuthLayout";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/router";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
