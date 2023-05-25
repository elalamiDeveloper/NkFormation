import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { ErrorPage, LoginPage, HomePage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },

  { path: '/login', element: <LoginPage /> },

  {
    path: '/:id',
    element: <HomePage />,
  },
]);

export default router;
