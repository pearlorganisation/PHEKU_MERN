/* eslint-disable react/prop-types */
const Hero = ({ name, colleges, exams, courses, degrees, certifications }) => {
  return (
    <div
      style={{
        background:
          "url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-700 font-bold text-2xl mt-12">
          KNOW MORE ABOUT
        </h1>

        <h1 className="text-white text-5xl font-bold ">{name}</h1>

        <div className="mt-6 flex flex-1 w-[50%] mb-12">
          <input
            type="text"
            placeholder="Search colleges, exams, schools and more"
            className="w-full p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-lg"
          />
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-r-full hover:bg-yellow-600 sm:text-lg">
            Search
          </button>
        </div>

        <div className="flex flex-row gap-6 mb-12">
          <div className="grid grid-cols-5 gap-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-2 text-2xl text-white">{colleges}</h2>
              <h1 className="mt-4 text-2xl  text-white">Colleges</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-2 text-2xl text-white">{exams}</h2>
              <h1 className="mt-4 text-2xl  text-white">Exams</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-2 text-2xl text-white">{courses}</h2>
              <h1 className="mt-4 text-2xl  text-white">Courses</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-2 text-2xl text-white">{degrees}</h2>
              <h1 className="mt-4 text-2xl  text-white">Degrees</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-2 text-2xl text-white">{certifications}</h2>
              <h1 className="mt-4 text-2xl  text-white">certifications</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
