import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TThemeContext = {
  theme: boolean;
  toggleTheme: () => void;
};
export type TAuth = {
  email: string;
  userName: string;
  userId: string;
  profilePhoto: string;
  isAuthenticated: boolean;
  lastSeen: boolean;
  readRecipt: boolean;
  location: string;
  displayStatus: boolean;
};
export type TAuthContext = {
  user: TAuth;
  setUser: Dispatch<SetStateAction<TAuth>>;
};

export type TLoaderContext = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
export type TContextProps = {
  children: ReactNode;
};
