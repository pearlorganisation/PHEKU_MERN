import Counselling from "../../components/Counselling/Counselling";
import CoursesCertification from "../../components/CoursesCertification/CoursesCertification";
import Data from "../../components/Data/Data";
import Hero from "../../components/Hero/Hero";
import OtherProducts from "../../components/OtherProducts/OtherProducts";
import Prediction from "../../components/Prediction/Prediction";

const HomePage = () => {
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
