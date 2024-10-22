import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./pages/Home/HomePage";
import BlogPage from "./pages/Blog/BlogPage";
import LayoutComponent from "./components/Layout/LayoutComponent";
import Login from "./pages/Auth/login/Login";
import SignUp from "./pages/Auth/signUp/SignUp";
import Stream from "./pages/Stream/Stream";
import AccomodationPage from "./pages/AccomodationPage/AccomodationPage";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import UniversityPage from "./pages/UniversityPage/UniversityPage";
import Exams from "./pages/ExamsPage/Exams";
import Courses from "./pages/CoursePage/Courses";

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
      {
        path: "contact_us",
        element: <ContactUs />,
      },
      {
        path: "university",
        element: <UniversityPage />
      },
      {
        path: "exams",
        element: <Exams />
      },
      {
        path: "courses",
        element: <Courses />
      }
    ],
  },
]);
function App() {

  return <>
        <ToastContainer
        position="top-right"  
        autoClose={5000}     
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"  
      />
  <RouterProvider router={router} />
  </> ;
}

export default App;
