import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUniversities } from "../../features/actions/universitiesAction";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../features/actions/countriesActions";

const universityData = [
  {
    name: "Massachusetts Institute of Technology (MIT)",
    slug: "mit",
    imagePath: "/mit.jpg",
    location: "Cambridge, Massachusetts, USA",
    country: "USA",
    highlights:
      "Renowned for its STEM programs, groundbreaking research, and entrepreneurial spirit.",
    overview:
      "MIT is a private research university known for its rigorous academics and focus on innovation.",
    contactInfo: {
      email: "mitinfo@mit.edu",
      website: "http://www.mit.edu",
    },
    ranking: {
      global: 1,
      national: 1,
    },
    universities: [],
    faculties: [
      {
        name: "Robert Langer",
        position: "Professor of Chemical Engineering",
        department: "Chemical Engineering",
        contactEmail: "langer@mit.edu",
      },
      {
        name: "Nergis Mavalvala",
        position: "Professor of Astrophysics",
        department: "Physics",
        contactEmail: "nmavalvala@mit.edu",
      },
    ],
  },
  {
    name: "Stanford University",
    slug: "stanford",
    location: "Stanford, California, USA",
    imagePath: "/stanford.jpg",
    country: "USA",
highlights:
      "Silicon Valley proximity, strong humanities programs, and a vibrant campus life.",
    overview:
      "Stanford is a private research university known for its entrepreneurial culture and interdisciplinary approach to learning.",
    contactInfo: {
      email: "info@stanford.edu",
      website: "http://www.stanford.edu",
    },
    ranking: {
      global: 2,
      national: 2,
    },
    universities: [],
    faculties: [
      {
        name: "Andrew Ng",
        position: "Adjunct Professor of Computer Science",
        department: "Computer Science",
        contactEmail: "ang@cs.stanford.edu",
      },
      {
        name: "Condoleezza Rice",
        position: "Professor of Political Science",
        department: "Political Science",
        contactEmail: "crice@stanford.edu",
      },
    ],
  },
  {
    name: "University of Oxford",
    slug: "oxford",
    location: "Oxford, Oxfordshire, England",
    imagePath: "/oxford.jpg", 
    country: "England",
    highlights:
      "World-renowned tutorial system, historic colleges, and a rich academic tradition.",
    overview:
      "Oxford is a collegiate research university, one of the oldest universities in the English-speaking world.",
    contactInfo: {
      email: "enquiries@admin.ox.ac.uk",
      website: "http://www.ox.ac.uk",
    },
    ranking: {
      global: 3,
      national: 1,
    },
    universities: [],
    faculties: [
      {
        name: "Louise Richardson",
        position: "Vice-Chancellor",
        department: "Administration",
        contactEmail: "vc@ox.ac.uk",
      },
      {
        name: "Richard Dawkins",
        position: "Emeritus Fellow",
        department: "Zoology",
        contactEmail: "richard.dawkins@zoo.ox.ac.uk",
      },
    ],
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    slug: "mit",
    imagePath: "/mit.jpg",
    location: "Cambridge, Massachusetts, USA",
    country: "USA",
    highlights:
      "Renowned for its STEM programs, groundbreaking research, and entrepreneurial spirit.",
    overview:
      "MIT is a private research university known for its rigorous academics and focus on innovation.",
    contactInfo: {
      email: "mitinfo@mit.edu",
      website: "http://www.mit.edu",
    },
    ranking: {
      global: 1,
      national: 1,
    },
    universities: [],
    faculties: [
      {
        name: "Robert Langer",
        position: "Professor of Chemical Engineering",
        department: "Chemical Engineering",
        contactEmail: "langer@mit.edu",
      },
      {
        name: "Nergis Mavalvala",
        position: "Professor of Astrophysics",
        department: "Physics",
        contactEmail: "nmavalvala@mit.edu",
      },
    ],
  },
  {
    name: "Stanford University",
    slug: "stanford",
    location: "Stanford, California, USA",
    country:"USA",
    imagePath: "/stanford.jpg",
    highlights:
      "Silicon Valley proximity, strong humanities programs, and a vibrant campus life.",
    overview:
      "Stanford is a private research university known for its entrepreneurial culture and interdisciplinary approach to learning.",
    contactInfo: {
      email: "info@stanford.edu",
      website: "http://www.stanford.edu",
    },
    ranking: {
      global: 2,
      national: 2,
    },
    universities: [],
    faculties: [
      {
        name: "Andrew Ng",
        position: "Adjunct Professor of Computer Science",
        department: "Computer Science",
        contactEmail: "ang@cs.stanford.edu",
      },
      {
        name: "Condoleezza Rice",
        position: "Professor of Political Science",
        department: "Political Science",
        contactEmail: "crice@stanford.edu",
      },
    ],
  },
  {
    name: "University of Oxford",
    slug: "oxford",
    location: "Oxford, Oxfordshire, England",
    imagePath: "/oxford.jpg",
    country: "England",
    highlights:
      "World-renowned tutorial system, historic colleges, and a rich academic tradition.",
    overview:
      "Oxford is a collegiate research university, one of the oldest universities in the English-speaking world.",
    contactInfo: {
      email: "enquiries@admin.ox.ac.uk",
      website: "http://www.ox.ac.uk",
    },
    ranking: {
      global: 3,
      national: 1,
    },
    universities: [],
    faculties: [
      {
        name: "Louise Richardson",
        position: "Vice-Chancellor",
        department: "Administration",
        contactEmail: "vc@ox.ac.uk",
      },
      {
        name: "Richard Dawkins",
        position: "Emeritus Fellow",
        department: "Zoology",
        contactEmail: "richard.dawkins@zoo.ox.ac.uk",
      },
    ],
  },
];

const UniversityPage = () => {
  const { universities } = useSelector((state) => state.university);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const dispatch = useDispatch();
  
// ----- getting countries  -----/
const { countryInfo } = useSelector((state)=>state.countries)

  useEffect(() => {
    dispatch(getCountries());
  }, [])


  // extracting only the unique countries from the data set
  const uniqueCountries = [
    ...new Set(countryInfo.map((country) => country.name)),
  ];

   // filter handle
  const filteredUniversities = universityData.filter((university) => {
    // to select by name
    const nameMatch = university.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    // to select by coountry
      const countryMatch =
      selectedCountries.length === 0 ||   // no country selected show all universities
      selectedCountries.includes(university.country);
      return nameMatch && countryMatch;
  });

  // handler to filter by country
  const handleCountryChange = (country) => {
    
    setSelectedCountries((prevSelected) => {
      if (prevSelected.includes(country)) {
        return prevSelected.filter((c) => c !== country);
      } else {
        return [...prevSelected, country];
      }
    });
  };


  return (
    <div className="px-16 py-4 mt-8 flex">
       
      <div className="w-1/6 mr-4 mt-10">
        <h2 className="text-xl font-semibold mb-2">Filter by Country</h2>
        <div>
          {uniqueCountries.map((country) => (
            <div key={country} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={country}  
                checked={selectedCountries.includes(country)}
                onChange={() => handleCountryChange(country)}
                className="mr-2"
              />
              <label htmlFor={country}>{country}</label>  
            </div>
          ))}
        </div>
      </div>

     
      <div className="w-5/6">  
        <h1 className="text-4xl font-bold text-red-400 text-center">
          Choose from the Best
        </h1>
        <input
          type="text"
          placeholder="Search universities..."
          className="mt-4 mb-4 p-2 border rounded-md w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <UniversityGrid universitiesInfo={filteredUniversities} />
      </div>
    </div>
  );
};

export default UniversityPage;

const UniversityGrid = ({ universitiesInfo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {universitiesInfo.map((university) => (
        <Link to={university.contactInfo.website}>
          <div
            key={university.name}
            className="bg-white rounded-lg h-96 shadow-md overflow-hidden"
          >
            <img
              src={university.imagePath}  
              alt={university.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
              <p className="text-gray-600 mb-1">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {university.location}
              </p>
              <p className="text-gray-600 mb-1">
                <i className="fas fa-globe mr-2"></i> Global Rank:{" "}
                {university.ranking?.global || "N/A"}
              </p>
              <p className="text-gray-600 mb-1">
                <i className="fas fa-flag mr-2"></i> National Rank:{" "}
                {university.ranking?.national || "N/A"}
              </p>
              <a
                href={university.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <i className="fas fa-link mr-2"></i>{" "}
                {university.contactInfo.website}
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
