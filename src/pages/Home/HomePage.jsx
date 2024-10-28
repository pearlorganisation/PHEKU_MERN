import { useDispatch, useSelector } from "react-redux";
import Counselling from "../../components/Counselling/Counselling";
import CoursesCertification from "../../components/CoursesCertification/CoursesCertification";
import Data from "../../components/Data/Data";
import Hero from "../../components/Hero/Hero";
import OtherProducts from "../../components/OtherProducts/OtherProducts";
import Prediction from "../../components/Prediction/Prediction";
// import { useEffect } from "react";
import { getUserProfile } from "../../features/actions/userAction";

const HomePage = () => {    
  const dispatch = useDispatch();

  const { isUserLoggedIn } = useSelector((state)=>state.auth);
  if(isUserLoggedIn){
   dispatch(getUserProfile())
 
  }
  return (
    <div>
      <Hero />
      <Counselling />
      <Data />
      <Prediction />
      <CoursesCertification />
      <OtherProducts />
    </div>
  );
};

export default HomePage;
