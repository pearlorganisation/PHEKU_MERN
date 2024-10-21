import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccomodations } from "../../features/actions/accomodationsAction";

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
            src="https://myunisearch.com/assets/accommodation/landing/accommodation.png"
            alt="image"
            className="w-full h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default AccomodationPage;
