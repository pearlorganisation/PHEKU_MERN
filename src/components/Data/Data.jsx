const exams = [
  {
    id: 1,
    name: "JEE MAIN",
  },
  {
    id: 2,
    name: "GATE",
  },
  {
    id: 3,
    name: "CAT",
  },
  {
    id: 4,
    name: "CLAT",
  },
  {
    id: 5,
    name: "NEET",
  },
  {
    id: 6,
    name: "BISMAT",
  },
  {
    id: 7,
    name: "SRMJEE",
  },
  {
    id: 8,
    name: "NIFT Entrance Exam",
  },
  {
    id: 9,
    name: "VITEEE",
  },
  {
    id: 10,
    name: "MET",
  },
  {
    id: 11,
    name: "CUET",
  },
  {
    id: 12,
    name: "LPU-NEST",
  },
];

const rankingItems = [
  {
    id: 1,
    name: "Top Engineering Colleges in India.",
  },
  {
    id: 2,
    name: "Top MBA Colleges in India.",
  },
  {
    id: 3,
    name: "Top LAW Colleges in India.",
  },
  {
    id: 4,
    name: "Top Medical Colleges in India.",
  },
  {
    id: 5,
    name: "Top Universities in India.",
  },
];

const Data = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-gray-200 justify-center mt-8 p-8">
        <h1 className="font-bold text-3xl"> Data</h1>

        <p className="mt-4 text-gray-600 w-[50%] text-center text-xl">
          We simplify information for you on over30,000 Colleges, 500 exams and
          500 courses across domains and regions all over India.
        </p>

        <div className="mt-6 w-[80%]">
          <div className="flex gap-6 justify-around">
            <div className="flex flex-col gap-6">
              <div className="border-2 border-gray-200 bg-white rounded-xl p-3">
                <div className="flex gap-4 ">
                  <img
                    src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/ranking.svg"
                    className="w-[40px] h-[40px]"
                  />
                  <h1>Rankings</h1>
                </div>
                <p className="mt-2 w-[90%]">
                  1500 Colleges Ranked based on transaprent, accurate,
                  government-approved, student-friendly data.
                </p>

                <div className="flex flex-col gap-2 mt-3">
                  {rankingItems.map((rankingItem) => (
                    <div
                      key={rankingItem.id}
                      className="border-gray-300 border-2 rounded-full hover:bg-blue-600 max-w-min p-1"
                    >
                      <h2 className=" text-black text-xs font-medium me-2  rounded-full p-2 hover:text-white w-max">
                        {rankingItem.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-2 border-gray-200 bg-white rounded-xl p-3 min-w-min">
                <div className="flex gap-4 ">
                  <img
                    src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/exam.svg"
                    className="w-[40px] h-[40px]"
                  />
                  <h1 className="font-bold text-xl">Exams</h1>
                </div>
                <p className="mt-2 w-[90%]">
                  Easy Information and Downloads on Exam Prepaation, dates,
                  counselling, syllabus and more.
                </p>

                <div className="grid grid-cols-3 gap-2 mt-2">
                  {exams.map((exam) => (
                    <div
                      key={exam.id}
                      className="border-gray-300 border-2 rounded-full hover:bg-blue-600 max-w-min p-1"
                    >
                      <h2 className=" text-black text-xs font-medium me-2  rounded-full p-2 hover:text-white w-max">
                        {exam.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <img
              src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/data.png"
              className="w-[80%] h-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
