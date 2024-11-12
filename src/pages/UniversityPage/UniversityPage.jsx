import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUniversities } from "../../features/actions/universitiesAction";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../features/actions/countriesActions";
const UniversityPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { universities, isSuccess } = useSelector((state) => state.university);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const dispatch = useDispatch();
  
// ----- getting countries  -----/
const { countryInfo } = useSelector((state)=>state.countries)

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getUniversities())
  }, [])


  // extracting only the unique countries from the data set
  // const uniqueCountries = [
  //   ...new Set(countryInfo?.map((country) => country.name)),
  // ];

   // filter handle
  const filteredUniversities = universities?.filter((university) => {
    // to select by name
    const nameMatch = university?.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    // to select by coountry
   
      return nameMatch;
  });

  const handleCountryChange = (country) => {
    let updatedCountries = [...selectedCountries];
    if (updatedCountries.includes(country._id)) {
      updatedCountries = updatedCountries.filter((ct) => ct !== country._id);
    } else {
      updatedCountries.push(country._id);
    }
    setSelectedCountries(updatedCountries);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const existingCountryIds = searchParams.getAll("country");

    // Only update search params if there’s a change in selected countries
    if (selectedCountries.sort().join(",") !== existingCountryIds.sort().join(",")) {
      searchParams.delete("country");
      selectedCountries.forEach((countryId) => searchParams.append("country", countryId));

      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true }
      );
    }

    // Dispatch action to get universities with selected country IDs
    dispatch(
      getUniversities({
        country: selectedCountries, // Pass selected country IDs
      })
    );
  }, [selectedCountries, navigate, location, dispatch]);

  return (
    <div className="px-16 py-4 mt-8 flex">
       
      <div className="w-1/6 mr-4 mt-10">
        <h2 className="text-xl font-semibold mb-2">Filter by Country</h2>
        <div>
          {countryInfo?.map((country) => (
            <div key={country?._id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={country}  
                value={country?._id}
                onChange={() => handleCountryChange(country)}
                className="mr-2"
              />
              <label htmlFor={country}>{country?.name}</label>  
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
        {isSuccess ? <UniversityGrid universitiesInfo={filteredUniversities} />:<><div className="text-red-600">No University found</div></>}
         
      </div>
    </div>
  );
};

export default UniversityPage;

const UniversityGrid = ({ universitiesInfo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {universitiesInfo?.map((university) => (
        <Link to={university?.contactInfo?.website}>
          <div
            key={university?.name}
            className="bg-white rounded-lg h-96 shadow-md overflow-hidden"
          >
            <img
              src={university?.imagePath}  
              alt={university?.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{university?.name}</h2>
              <p className="text-gray-600 mb-1">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {university?.location}
              </p>
              <p className="text-gray-600 mb-1">
                <i className="fas fa-globe mr-2"></i> Global Rank:{" "}
                {university?.ranking?.global || "N/A"}
              </p>
              <p className="text-gray-600 mb-1">
                <i className="fas fa-flag mr-2"></i> National Rank:{" "}
                {university?.ranking?.national || "N/A"}
              </p>
              <a
                href={university?.contactInfo?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <i className="fas fa-link mr-2"></i>{" "}
                {university?.contactInfo?.website}
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
