import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import BlogPage from './pages/Blog/BlogPage';
import LayoutComponent from './components/Layout/LayoutComponent';
import Login from './pages/Auth/login/Login';
import SignUp from './pages/Auth/signUp/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <BlogPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
    ],
  },
]);
function App() {

  return <RouterProvider router={router} />;
}

export default App
