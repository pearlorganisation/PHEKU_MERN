import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Hiring",
  },
  {
    id: 3,
    name: "Magazine",
  },
  {
    id: 4,
    name: "News",
  },
  {
    id: 5,
    name: "Contact",
  },

  {
    id: 6,
    name: "Blogs",
  },
];

const socialSites = [
  {
    id: 1,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/instagram.png",
  },
  {
    id: 2,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/youtube.png",
  },

  {
    id: 4,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/linkedin.png",
  },
  {
    id: 5,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/twitter.png",
  },
];

const topExams = [
  {
    id: 1,
    name: "JEE Main 2024",
  },
  {
    id: 2,
    name: "CAT 2024",
  },
  {
    id: 3,
    name: "NEET 2024",
  },
  {
    id: 4,
    name: "GATE 2025",
  },
  {
    id: 5,
    name: "CMAT 2024",
  },
  {
    id: 6,
    name: "CLAT",
  },
  {
    id: 7,
    name: "MHCET LAW",
  },
  {
    id: 8,
    name: "MAT 2024",
  },

  {
    id: 9,
    name: "SNAP 2024",
  },
  {
    id: 10,
    name: "IIT JAM 2024",
  },
  {
    id: 11,
    name: "LPUNEST 2024",
  },
  {
    id: 12,
    name: "MET 2024",
  },
  {
    id: 13,
    name: "CUET 2024",
  },
  {
    id: 14,
    name: "SUET 2024",
  },
  {
    id: 15,
    name: "JEE Advanced 2024",
  },
];

const colleges = [
  {
    id: 1,
    name: "College Review",
  },
  {
    id: 2,
    name: "Top Colleges in India",
  },
  {
    id: 3,
    name: "Top MBA Colleges in India",
  },
  {
    id: 4,
    name: "Top Engineering Colleges in India",
  },
  {
    id: 5,
    name: "Top MBA Colleges in India Accepting CAT Score",
  },
  {
    id: 6,
    name: "Top Law Colleges in India",
  },
  {
    id: 7,
    name: "Top Colleges in Chennai",
  },
  {
    id: 8,
    name: "Top Medical Colleges in India",
  },

  {
    id: 9,
    name: "LPU",
  },
  {
    id: 10,
    name: "UPES",
  },
  {
    id: 11,
    name: "MAHE (Mahipal University)",
  },
  {
    id: 12,
    name: "SRM Unviersity Chennai",
  },
  {
    id: 13,
    name: "Great Lakes",
  },
];
const predictors = [
  {
    id: 1,
    name: "CAT Percentile Predicitor",
  },
  {
    id: 2,
    name: "JEE Main Rank Predicitor",
  },
  {
    id: 3,
    name: "JEE Main College Predicitor",
  },
  {
    id: 4,
    name: "CAT College Predicitor",
  },
  {
    id: 5,
    name: "JEE Advanced College Predicitor",
  },
  {
    id: 6,
    name: "NEET Rank Predicitor",
  },
  {
    id: 7,
    name: "NEET College Predicitor",
  },
  {
    id: 8,
    name: "GATE College Predicitor with PSU Chances",
  },
  {
    id: 9,
    name: "CLAT Predicitor",
  },
  {
    id: 10,
    name: "E-books & Sample Paper",
  },
  {
    id: 11,
    name: "College Predicitor",
  },
  {
    id: 12,
    name: "MHCET LAW College Predicitor",
  },

  {
    id: 13,
    name: "AILET College Predicitor",
  },
];

const resources = [
  {
    id: 1,
    name: "B.Tech Comparison",
  },
  {
    id: 2,
    name: "Schools",
  },
  {
    id: 3,
    name: "NCERT",
  },
  {
    id: 4,
    name: "Online MBA",
  },
  {
    id: 5,
    name: "Courses",
  },
  {
    id: 6,
    name: "QnA - Get Answers to your doubts",
  },
  {
    id: 7,
    name: "Counselling Webinars",
  },
  {
    id: 8,
    name: "MBA Salary in India",
  },
  {
    id: 9,
    name: " Online Certification Courses",
  },
  {
    id: 10,
    name: "IIM Fees",
  },
  {
    id: 11,
    name: "TS ICET Counselling",
  },
  {
    id: 12,
    name: "AP ICET Counselling",
  },
  {
    id: 13,
    name: "CLAT 2025",
  },
  {
    id: 14,
    name: "NIRF Ranking",
  },
];

const bottomPages = [
  {
    id: 1,
    name: "Sitemap",
    link: "/",
  },
  {
    id: 2,
    name: "Disclaimer",
    link: "/",
  },
  {
    id: 3,
    name: "Comment Policy",
    link: "/",
  },
  {
    id: 4,
    name: "Privacy Policy",
    link: "/",
  },
  {
    id: 5,
    name: "Grievance Redressal",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="bg-black mt-4">
      <div className="p-[5%] ">
        <div className="grid grid-cols-3 gap-12">
          <h1 className="text-5xl font-extrabold text-white">PHEKU</h1>

          <div className="flex flex-row gap-6 items-center justify-center">
            {links.map((link) => (
              <Link key={link.name} to="/">
                <h3 className="text-white">{link.name}</h3>
              </Link>
            ))}
          </div>

          <div className="flex flex-row gap-2 items-center justify-center">
            {socialSites.map((socialSite) => (
              <Link key={socialSite.id} to="/">
                <img src={socialSite.image} />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-12 mt-12">
          <div className="flex flex-col mt-2 mb-8">
            <h1 className="mt-4 mb-8 text-md font-bold text-white">
              Top Exams
            </h1>
            {topExams.map((topExam) => (
              <div className="mt-3" key={topExam.id}>
                <h3 className="text-white text-sm">{topExam.name}</h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col mt-2 mb-8">
            <h1 className="mt-4 mb-8 text-md font-bold text-white">College</h1>
            {colleges.map((college) => (
              <div className="mt-3" key={college.id}>
                <h3 className="text-white text-sm">{college.name}</h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col mt-2 mb-8">
            <h1 className="mt-4 mb-8 text-md font-bold text-white">
              Predictors & Ebooks
            </h1>
            {predictors.map((predictor) => (
              <div className="mt-3" key={predictor.id}>
                <h3 className="text-white text-sm">{predictor.name}</h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col mt-2 mb-8">
            <h1 className="mt-4 mb-8 text-md font-bold text-white">
              Resources
            </h1>
            {resources.map((resource) => (
              <div className="mt-3" key={resource.id}>
                <h3 className="text-white text-sm">{resource.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="flex flex-row gap-3">
            {bottomPages.map((bottomPage) => (
              <h4 className="text-white text-sm" key={bottomPage.id}>
                {bottomPage.name}
              </h4>
            ))}
          </div>

          <p className="text-sm text-white px-12"> Copyright © 2024 PHEKU </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
