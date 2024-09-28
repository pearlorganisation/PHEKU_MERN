const collegePredictors = [
  {
    id: 1,
    name: "JEE MAIN College Predictor",
  },
  {
    id: 2,
    name: "GATE College Predictor with PSU Chances",
  },
  {
    id: 3,
    name: "NEET College Predictor",
  },
  {
    id: 4,
    name: "NEET PG College Predictor",
  },
  {
    id: 5,
    name: "MHT CET College Predictor",
  },
  {
    id: 6,
    name: "TS EAMCET College Predictor",
  },
  {
    id: 7,
    name: "AP EAMCET College Predictor",
  },

  {
    id: 8,
    name: "CLAT College Predictor",
  },
];

const rankingPredictors = [
  {
    id: 1,
    name: "JEE Main Rank Predcitor",
  },
  {
    id: 2,
    name: "GATE Score Predictor",
  },
  {
    id: 3,
    name: "NEET Rank Predictor",
  },
  {
    id: 4,
    name: "NEET PG Rank Predictor",
  },
];

const Prediction = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white justify-center mt-8 p-8">
        <h1 className="font-bold text-3xl"> Prediction</h1>

        <p className="mt-4 text-gray-600 w-[50%] text-center text-xl">
          We predict your College Admission chances and Ranks based onyears of
          historical data and Advanced Analytics to help you plan in advance.
        </p>

        <div className="mt-6 w-[100%] mb-12">
          <div className="flex gap-6 justify-around">
            <img
              src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/prediction.png"
              className="w-[80%] h-[80%]"
            />
            <div className="flex flex-col gap-6">
              <div className="border-2 border-gray-200 bg-white rounded-xl p-3">
                <div className="flex gap-4 ">
                  <img
                    src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/college-predictors.svg"
                    className="w-[40px] h-[40px]"
                  />
                  <h1>College Predictors</h1>
                </div>
                <p className="mt-2 w-[90%]">
                  Kon your College Admission chances at the course-level based
                  on domicile, cast, gender etc.
                </p>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {collegePredictors.map((college) => (
                    <div
                      key={college.id}
                      className="border-gray-300 border-2 rounded-full hover:bg-blue-600 max-w-min p-1"
                    >
                      <h2 className=" text-black text-xs font-medium me-2  rounded-full p-2 hover:text-white w-max">
                        {college.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-2 border-gray-200 bg-white rounded-xl p-3 min-w-min">
                <div className="flex gap-4 ">
                  <img
                    src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/rank-predictor.svg"
                    className="w-[40px] h-[40px]"
                  />
                  <h1 className="font-bold text-xl">Rank Predictors</h1>
                </div>
                <p className="mt-2 w-[90%]">
                  Predict your rank before the actual results based on your
                  performance in the exam and get in-depth insights.
                </p>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {rankingPredictors.map((rankPredictor) => (
                    <div
                      key={rankPredictor.id}
                      className="border-gray-300 border-2 rounded-full hover:bg-blue-600 max-w-min p-1"
                    >
                      <h2 className=" text-black text-xs font-medium me-2  rounded-full p-2 hover:text-white w-max">
                        {rankPredictor.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
