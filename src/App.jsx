import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import HomePage from "./pages/Home/HomePage";
 
import LayoutComponent from "./components/Layout/LayoutComponent";
import Login from "./pages/Auth/login/Login";
import SignUp from "./pages/Auth/signUp/SignUp";
import Stream from "./pages/Stream/Stream";
import AccomodationPage from "./pages/AccomodationPage/AccomodationPage";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import UniversityPage from "./pages/UniversityPage/UniversityPage";
import Exams from "./pages/ExamsPage/Exams";
import Courses from "./pages/CoursePage/Courses";
import Profile from "./pages/ProfilePage/Profile";
import Blog from "./pages/BlogPage/Blog";
import Accomodationdetails from "./pages/AccomodationDetails/Accomodationdetails";
import BlogDetails from "./pages/BlogDetailsPage/BlogDetails";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ForgotPassword/ResetPassword";
import UniversityDetails from "./pages/UniversityDetails/UniversityDetails";

 
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
        path: "/stream",
        element: <Stream />,
      },
      { path: "/accomodation",
        element: <AccomodationPage /> 
      },
      { 
        path: "/accomodation/:id",
        element: <Accomodationdetails />
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/contact_us",
        element: <ContactUs />,
      },
      {
        path: "/university",
        element: <UniversityPage />
      },
      {
        path: "/university/:id",
        element: <UniversityDetails />
      },
      {
        path: "/exams",
        element: <Exams />
      },
      {
        path: "/courses",
        element: <Courses />
      },
      {
        path: "/profile",
        element:   <Profile /> 
      },
      {
        path:"/blogs",
        element: <Blog />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />
      },
      {
        path: "/update-password",
        element: <UpdatePassword />  
      },
      {
        path:"/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/reset/:resetToken",
        element: <ResetPassword />
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
