import { useContext } from 'react';
import { AuthContext } from '../contexts';
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('Context must be within context provider');
  }
  return context;
};
