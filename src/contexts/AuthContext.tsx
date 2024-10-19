import { createContext, FC, useEffect, useState } from 'react';
import { TContextProps, TAuthContext, TAuth } from '../@types';
import { generateRequest } from '../services';
export const AuthContext = createContext<TAuthContext | null>(null);
const AuthContextProvider: FC<TContextProps> = ({ children }) => {
  const [user, setUser] = useState<TAuth>({
    email: '',
    userName: 'Souvik Bhattacharjee',
    userId: '',
    profilePhoto: '',
    isAuthenticated: false,
    lastSeen: false,
    readRecipt: false,
    location: '',
    displayStatus: false,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = (await generateRequest<TAuth>({
          path: 'verify-token',
          method: 'GET',
        })) as TAuth;
        setUser({ ...data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const value = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
