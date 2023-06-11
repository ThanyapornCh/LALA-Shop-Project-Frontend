import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import * as authApi from '../apis/auth-api';
import { getAccessToken, setAccessToken } from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );
  // useEffect(() => {
  //   const fetchAuthUser = async () => {
  //     try {
  //       const res = await authApi.getMe();
  //       setAuthenticatedUser(res.data.user);
  //     } catch (err) {
  //       removeAccessToken();
  //     }
  //   };
  //   if (getAccessToken()) {
  //     fetchAuthUser();
  //   }
  // }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.getAccessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
