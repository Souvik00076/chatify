import { Auth, Home, VerificationComplete, VerifyEmail } from '../pages';
import { Login, Signup } from '../components';

export const routes = [
  {
    path: 'auth',
    element: <Auth />,
    children: [
      {
        path: 'register',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'verify',
    element: <VerifyEmail />,
  },
  {
    path: 'verification-complete',
    element: <VerificationComplete />,
  },
];
