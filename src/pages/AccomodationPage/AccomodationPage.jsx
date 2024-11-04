import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccomodations } from "../../features/actions/accomodationsAction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const AccomodationPage = () => {
  const dispatch = useDispatch();
  const { accomodations } = useSelector((state) => state.accomodation);

  useEffect(() => {
    dispatch(getAccomodations());
  }, []);

  console.log(accomodations, "accomodations from db");
  return (
    <div className="px-16 py-4 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_auto]">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-7xl text-orange-600 font-semibold mt-2">
            {" "}
            Accomodation{" "}
          </h1>
          <h1 className="text-7xl text-black font-semibold mt-2"> Through </h1>
          <h1 className="text-7xl text-black font-semibold mt-2"> Pheku </h1>

          <p className="mt-4">
            This is demo description of the accomodation page This is demo
            description of the accomodation page This is demo description of the
            accomodation page This is demo description of the accomodation page
          </p>
        </div>

        <div className="p-8">
          <img
            src="https://myunisearch.com/assets/accomodation/landing/accomodation.png"
            alt="image"
            className="w-full h-72"
          />
        </div>
      </div>
      <div className="lg:mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 mt-8 mb-4">Available Accommodations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accomodations?.map((accomodation) => (
            <div key={accomodation._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {accomodation?.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image.secure_url}
                        alt={accomodation?.name}
                        className="w-full h-64 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              
               
              </div>


              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{accomodation?.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {accomodation?.type} in {accomodation?.location?.city}, {accomodation?.location?.country}
                </p>
                <p className="text-gray-500 mt-4 line-clamp-3">{accomodation?.description}</p>  

                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Monthly Rent:</span>
                    <span className="text-lg font-semibold text-indigo-600">
                      {accomodation?.fees?.monthly}{accomodation?.fees?.monthly && ' /month'}
                    </span>
                  </div>

                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Security Deposit:</span>
                    <span>{accomodation?.fees?.securityDeposit}{accomodation?.fees?.securityDeposit && ' /month'}</span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Available Spaces:</span>
                    <span>{accomodation?.availableSpaces}</span>
                  </div>


                  <div className="mt-4">  
                    <p className="text-gray-700 font-medium">Contact:</p>
                    <p className="text-sm">{accomodation?.contactInfo?.phone}</p>
                    <p className="text-sm">{accomodation?.contactInfo?.email}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700 font-medium">Amenities:</p>
                    <p className="text-sm">{accomodation?.amenities}</p>  
                  </div>


                </div>
                <div className="mt-6">  
                  <Link to={`/accomodation/${accomodation._id}`} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccomodationPage;
 