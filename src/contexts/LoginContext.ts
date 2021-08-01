import { createContext } from 'react';

const LoginContext = createContext({
    isLogin: false,
    login: (username: any) => {},
    logout: () => {},
    })

    export default LoginContext;