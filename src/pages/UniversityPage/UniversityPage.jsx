import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUniversities } from "../../features/actions/universitiesAction";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../features/actions/countriesActions";

import {
  Star,
  MapPin,
  Calendar,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const UniversityPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { universities, isSuccess } = useSelector((state) => state.university);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const dispatch = useDispatch();

  // ----- getting countries  -----/
  const { countryInfo } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getUniversities());
  }, []);

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
    if (
      selectedCountries.sort().join(",") !== existingCountryIds.sort().join(",")
    ) {
      searchParams.delete("country");
      selectedCountries.forEach((countryId) =>
        searchParams.append("country", countryId)
      );

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
        {isSuccess ? (
          <UniversityGrid universitiesInfo={filteredUniversities} />
        ) : (
          <>
            <div className="text-red-600">No University found</div>
          </>
        )}
      </div>
    </div>
  );
};

export default UniversityPage;

const UniversityGrid = ({ universitiesInfo }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Function to extract src from iframe string
  const extractMapSrc = (iframeString) => {
    const srcMatch = iframeString.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : "";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 w-full p-4">
      {universitiesInfo?.map((university) => (
        <div
          key={university._id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          {/* Cover Photo Section */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={university?.coverPhoto?.secure_url}
              alt={university?.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img
                  src={university?.logo?.secure_url}
                  alt={`${university.name} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                {university?.name}
              </h2>
              <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-blue-600 font-semibold">
                  {university?.totalRating}
                </span>
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>
                  {university?.city}, {university?.state},{" "}
                  {university?.country?.name}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Established in {university?.estdYear}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>{university?.totalCourse} Courses Available</span>
              </div>
            </div>

            {/* Expandable Content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                expandedId === university._id ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              {/* Overview */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Overview
                </h3>
                <div
                  className="text-gray-600 prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: university?.overview }}
                />
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Highlights
                </h3>
                <div
                  className="text-gray-600 prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: university?.highlights }}
                />
              </div>

              {/* Location Map */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Location
                </h3>
                <div className="mt-2 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={extractMapSrc(university?.location)}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>
                <p className="text-gray-600 mt-2">
                  <strong>Address:</strong> {university?.address}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => toggleExpand(university._id)}
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                {expandedId === university._id ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Show More
                  </>
                )}
              </button>

              <Link
                to={`/university/${university?._id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
