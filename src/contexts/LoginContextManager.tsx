import React, { useState } from "react";
import LoginContext from "./LoginContext";

interface Props {
  children: JSX.Element;
}

const LoginContextManager = ({ children }: Props) => {
    const [isLogin, setIsLogin] = useState(false);
  
    const login = (username: string) => {
      username&&setIsLogin(true);
    };
  
    const logout = () => {
      setIsLogin(false);
    };
  
    return (
      <LoginContext.Provider value={{ isLogin, login, logout }}>
        {children}
      </LoginContext.Provider>
    );
  };
  
  export default LoginContextManager;
