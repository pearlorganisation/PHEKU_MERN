import DiscoverStories from "../../components/Streams/DiscoverStories/DiscoverStories";
import Hero from "../../components/Streams/Hero/Hero";
import StayInformed from "../../components/Streams/StayInformed/StayInformed";

const Stream = () => {
  return (
    <div>
      <Hero
        name={"Engineering and Architecture"}
        colleges="8892"
        degrees="40+"
        courses="76660"
        exams="74"
        certifications="1662"
      />

      <DiscoverStories />
      <StayInformed />
    </div>
  );
};

export default Stream;
