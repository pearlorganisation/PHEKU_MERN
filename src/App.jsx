import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./pages/Home/HomePage";
import BlogPage from "./pages/Blog/BlogPage";
import LayoutComponent from "./components/Layout/LayoutComponent";
import Login from "./pages/Auth/login/Login";
import SignUp from "./pages/Auth/signUp/SignUp";
import Stream from "./pages/Stream/Stream";
import AccomodationPage from "./pages/AccomodationPage/AccomodationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "stream",
        element: <Stream />,
      },
      { path: "accomodation", element: <AccomodationPage /> },
      {
        path: "about",
        element: <BlogPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
