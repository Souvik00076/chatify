import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './constants';
import AuthContextProvider from './contexts/AuthContext';

export const App: FC = () => {
  const router = createBrowserRouter(routes);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};
